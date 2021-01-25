import { createContext } from "react";
import { UPDATE } from "src/_helpers/types";
import { Show } from "src/_models/shows.model";

const ShowReducer = (
    state: Show,
    action: { type: string; payload: any }
): Show => {
    switch (action.type) {
        case UPDATE:
            return { ...action.payload };
        default:
            break;
    }
    return state;
};

const initialShowState: Show = (null as unknown) as Show;

const ShowContext = createContext({
    ShowState: initialShowState,
    dispatchShow: {} as any,
});

const ShowProvider = ShowContext.Provider;
export default ShowContext;
export { ShowProvider, ShowReducer, initialShowState };
