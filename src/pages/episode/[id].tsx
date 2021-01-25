/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";

const EpisodeComponent = () => {
    const router = useRouter();
    const { id } = router.query;

    return <div className="col-12">{id}</div>;
};

export default EpisodeComponent;
