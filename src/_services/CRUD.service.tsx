import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { API_URL } = publicRuntimeConfig;

const get = async (api: string) => {
    const requestOptions = {
        method: "GET",
    };
    return fetch(api, requestOptions as RequestInit).then(handleResponse);
};

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
};
