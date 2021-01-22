import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const authHeader = () => {
    return { Authorization: `Bearer ` };
};

const get = async (api: string) => {
    const requestOptions = {
        method: "GET",
        headers: authHeader(),
    };
    return fetch(api, requestOptions).then(handleResponse);
};
const post = async (api, body) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader() },
        credentials: "include",
        body: JSON.stringify(body),
    };
    return fetch(`${api}`, requestOptions as RequestInit).then(handleResponse);
};

function put(api, body) {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json", ...authHeader() },
        body: JSON.stringify(body),
    };
    return fetch(`${api}`, requestOptions).then(handleResponse);
}

function handleResponse(response: Response) {
    return response.text().then((text) => {
        if (text.startsWith("<!DOCTYPE html>"))
            return Promise.reject({ code: response.status });
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

export const CRUDService = {
    get,
    put,
    post,
    API_URL,
};
