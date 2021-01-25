/** @jsx jsx */
import { Button, Result, Tag } from "antd";
import { useContext, useEffect, useReducer } from "react";
import ListItem from "src/components/listItem.component";
import { Show } from "src/_models/shows.model";
import useSWR from "swr";
import { jsx } from "theme-ui";
import ReactHtmlParser from "react-html-parser";
import ShowContext from "src/_contexts/show.context";
import { UPDATE } from "src/_helpers/types";

const Page = () => {
    const { data, error } = useSWR<Show>(
        "https://api.tvmaze.com/singlesearch/shows?q=rick-and-morty&embed=episodes"
    );
    const { ShowState, dispatchShow } = useContext(ShowContext);

    useEffect(() => {
        if (data) {
            dispatchShow({
                type: UPDATE,
                payload: data,
            });
        }
        if (error) console.log(error, data);
    }, [data, error]);

    if (!data && !error) {
        return <div>Loading...</div>;
    }

    if (error) {
        return (
            <Result
                status="404"
                title="404"
                subTitle="The show you are looking for was not found"
            />
        );
    }

    return (
        <div className="row">
            <div className="col-12 mb-3">
                <div
                    className="col-12"
                    sx={{ variant: "containers.card", bg: "white" }}
                >
                    <div className="row">
                        <div
                            className="col-3"
                            sx={{ maxHeight: "250px", overflow: "hidden" }}
                        >
                            <img
                                className="img-fluid"
                                sx={{
                                    height: "auto",
                                    width: "100%",
                                    display: "grid",
                                    alignSelf: "center",
                                }}
                                src={data.image && data.image.original}
                            />
                        </div>
                        <div className="col-9">
                            <div className="row">
                                <div
                                    className="col-10"
                                    sx={{
                                        display: "grid",
                                        placeItems: "center start",
                                    }}
                                >
                                    <h1
                                        sx={{
                                            display: "grid",
                                            placeItems: "center start",
                                            marginBlockEnd: "0",
                                        }}
                                    >
                                        {data.name}
                                    </h1>
                                </div>
                                <div className="col-2">
                                    <span
                                        sx={{
                                            fontSize: "18px",
                                            display: "grid",
                                            placeItems: "center",
                                            height: "100%",
                                        }}
                                    >
                                        {/* <Badge count={data.rating.average} /> */}
                                        <Tag color="#f50">
                                            Rating: {data.rating.average}
                                        </Tag>
                                    </span>
                                </div>
                                <div className="col-12 mt-3">
                                    <p sx={{ fontSize: "16px" }}>
                                        {ReactHtmlParser(data.summary)}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p
                                        sx={{
                                            color: "blue",
                                            textDecoration: "underline",
                                            fontSize: "16px",
                                            "&:hover": {
                                                cursor: "pointer",
                                            },
                                            marginBlockEnd: "5px",
                                        }}
                                    >
                                        {data.officialSite}
                                    </p>
                                </div>
                                <div className="col-12 mt-3">
                                    <div className="row">
                                        <div className="col-3">
                                            <Tag
                                                color="magenta"
                                                sx={{
                                                    paddingY: "5px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                }}
                                            >
                                                <p
                                                    sx={{
                                                        fontSize: "16px",
                                                        marginBlockEnd: "0",
                                                    }}
                                                >
                                                    Network: {data.network.name}
                                                </p>
                                            </Tag>
                                        </div>
                                        <div className="col-3">
                                            <Tag
                                                color="green"
                                                sx={{
                                                    paddingY: "5px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                }}
                                            >
                                                <p
                                                    sx={{
                                                        fontSize: "16px",
                                                        marginBlockEnd: "0",
                                                    }}
                                                >
                                                    Status: {data.status}
                                                </p>
                                            </Tag>
                                        </div>
                                        <div className="col-3">
                                            <Tag
                                                color="cyan"
                                                sx={{
                                                    paddingY: "5px",
                                                    display: "grid",
                                                    placeItems: "center",
                                                }}
                                            >
                                                <p
                                                    sx={{
                                                        fontSize: "16px",
                                                        marginBlockEnd: "0",
                                                    }}
                                                >
                                                    Genre: {data.genres[0]}
                                                </p>
                                            </Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                {data._embedded.episodes.length ? (
                    <ul className="row" sx={{ variant: "containers.ul" }}>
                        {data._embedded.episodes.map((x) => (
                            <ListItem episode={x} key={x.id} />
                        ))}
                    </ul>
                ) : (
                    <div>No Episodes found</div>
                )}
            </div>
        </div>
    );
};

export default Page;
