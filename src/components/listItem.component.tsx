/** @jsx jsx */
import { jsx } from "theme-ui";
import { ShowEpisode } from "src/_models/shows.model";
import LazyLoad from "react-lazyload";
import { Skeleton } from "antd";
import { useRouter } from "next/router";

interface IProp {
    episode: ShowEpisode;
}

const ListItem: React.FC<IProp> = ({ episode }) => {
    const router = useRouter();
    return (
        <li className="col-3" onClick={() => router.push(`/${episode.id}`)}>
            <div
                sx={{
                    variant: "containers.card",
                    bg: "whitesmoke",
                    minHeight: "200px",
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
                        src={episode.image.original}
                    />
                </LazyLoad>
                {episode.name}
            </div>
        </li>
    );
};

export default ListItem;
