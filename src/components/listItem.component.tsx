/** @jsx jsx */
import { jsx } from "theme-ui";
import { ShowEpisode } from "src/_models/shows.model";
import LazyLoad from "react-lazyload";
import { Skeleton, Tag } from "antd";
import { useRouter } from "next/router";
import { darken } from "@theme-ui/color";

interface IProp {
    episode: ShowEpisode;
}

const ListItem: React.FC<IProp> = ({ episode }) => {
    const router = useRouter();
    return (
        <li
            className="col-3"
            onClick={() => router.push(`/episode/${episode.id}`)}
            sx={{
                "&:hover": { bg: darken("whitesmoke", 0.1) },
                cursor: "pointer",
            }}
        >
            <div
                sx={{
                    variant: "containers.card",
                    bg: "whitesmoke",
                    width: "auto",
                    maxWidth: "100%",
                }}
                className="col-12"
            >
                <LazyLoad
                    width="100%"
                    height="100"
                    offset="100"
                    placeholder={
                        <Skeleton.Image
                            sx={{
                                width: "100%",
                                height: "150",
                                minHeight: "100",
                            }}
                        />
                    }
                >
                    <img
                        className="img-fluid"
                        sx={{
                            height: "150px",
                            width: "100%",
                            display: "grid",
                            alignSelf: "center",
                        }}
                        src={episode.image && episode.image.original}
                    />
                </LazyLoad>
            </div>
            <div className="col-12 pt-2">
                <div className="row">
                    <div className="col-6">
                        <Tag color="red">Season {episode.season}</Tag>
                    </div>
                    <div
                        className="col-6"
                        sx={{ display: "grid", placeItems: "center right" }}
                    >
                        <Tag color="blue">Episode {episode.number}</Tag>
                    </div>
                </div>
                <p
                    className="pt-1"
                    sx={{
                        fontWeight: "bold",
                        fontSize: "18px",
                    }}
                >
                    {episode.name}
                </p>
            </div>
        </li>
    );
};

export default ListItem;
