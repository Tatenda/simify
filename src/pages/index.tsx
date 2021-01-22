/** @jsx jsx */
import { useEffect } from "react";
import { show } from "src/_models/shows.model";
import useSWR from "swr";
import { jsx } from "theme-ui";

const Page = () => {
    const { data, error } = useSWR<show[]>("");

    useEffect(() => {}, []);

    return (
        <div className="row">
            <div className="col-12">
                <ul className="row" sx={{ variant: "containers.ul" }}>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                    <li className="col-3">
                        <div
                            sx={{
                                variant: "containers.card",
                                bg: "whitesmoke",
                            }}
                            className="col-12"
                        >
                            item
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Page;
