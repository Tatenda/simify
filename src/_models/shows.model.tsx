export interface ShowEpisode {
    airdate: string;
    airstamp: string;
    airtime: string;
    id: number;
    image: { medium: string; original: string };
    name: string;
    number: number;
    runtime: number;
    season: number;
    summary: string;
    type: string;
    url: string;
}
export interface Show {
    id: number;
    _embedded: { episodes: ShowEpisode[] };
    externals: { tvrage: number; thetvdb: number; imdb: string };
    genres: string[];
    image: { medium: string; original: string };
    language: string;
    name: string;
    network: {
        id: number;
        name: string;
        country: { code: string; name: string; timezone: string };
    };
    officialSite: string;
    premiered: string;
    rating: { average: number };
    runtime: number;
    schedule: { time: string; days: string[] };
    status: string;
    summary: string;
    type: string;
    updated: number;
    url: string;
    webChannel: null;
    weight: number;
}
