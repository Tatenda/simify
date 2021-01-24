/** @jsx jsx */
import { useEffect } from "react";
import ListItem from "src/components/listItem.component";
import { Show } from "src/_models/shows.model";
import useSWR from "swr";
import { jsx } from "theme-ui";

const Page = () => {
    const { data, error } = useSWR<Show>(
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"
    );

    useEffect(() => {
        if (data) {
            console.log(data);
        }
        if (error) console.log(error);
    }, [data, error]);

    if (!data && !error) {
        return <div>Loading...</div>;
    }

    if (error) {
        //display error
    }

    return (
        <div className="row">
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
