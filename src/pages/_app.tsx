import React, { useReducer, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../../theme";
import Nav from "../components/nav.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../../style.scss";
import useSWR, { SWRConfig } from "swr";
import { CRUDService } from "../_services/CRUD.service";
import { Layout } from "antd";
import {
    ShowProvider,
    ShowReducer,
    initialShowState,
} from "src/_contexts/show.context";

const { Content } = Layout;

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false);
    let [ShowState, dispatchShow] = useReducer(ShowReducer, initialShowState);

    return (
        <ThemeProvider theme={theme}>
            <ShowProvider value={{ ShowState, dispatchShow }}>
                <SWRConfig value={{ fetcher: CRUDService.get }}>
                    {!loading ? (
                        <Layout>
                            <Nav />
                            <Content
                                sx={{
                                    height: "100%",
                                    backgroundColor: `background`,
                                    paddingBlockEnd: "80px",
                                }}
                                className="site-layout mainContainer col-12"
                            >
                                <div className="row">
                                    <div
                                        sx={{
                                            variant: "containers.page",
                                        }}
                                        className="site-layout-background col-12"
                                    >
                                        <Component {...pageProps} />
                                    </div>
                                </div>
                            </Content>
                        </Layout>
                    ) : (
                        <div>Loading...</div>
                    )}
                </SWRConfig>
            </ShowProvider>
        </ThemeProvider>
    );
}
