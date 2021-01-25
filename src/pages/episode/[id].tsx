/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";
import { Tag } from "antd";
import ReactHtmlParser from "react-html-parser";
import { useContext, useEffect, useState } from "react";
import { ShowEpisode } from "src/_models/shows.model";
import ShowContext from "src/_contexts/show.context";

const EpisodeComponent = () => {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState<ShowEpisode>();
    const { ShowState } = useContext(ShowContext);

    useEffect(() => {
        if (ShowState) {
            const res = ShowState._embedded.episodes.find(
                (x) => x.id === Number(id as string)
            );
            setData(res);
        }
    }, [ShowState]);

    useEffect(() => {
        console.log("data", data);
    }, [data]);

    return (
        <>
            {data && (
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
                                            {data.runtime}minutes
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
                                            "&:hover": { cursor: "pointer" },
                                            marginBlockEnd: "5px",
                                        }}
                                    >
                                        {data.url}
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
                                                    Season: {data.season}
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
                                                    Episode: {data.number}
                                                </p>
                                            </Tag>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default EpisodeComponent;
