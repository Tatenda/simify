import { roboto } from "@theme-ui/presets";

const theme = {
    ...roboto,
    containers: {
        card: {
            border: "1px solid",
            borderColor: "muted",
            borderRadius: "4px",
            p: 2,
            boxShadow:
                "0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)",
        },
        page: {
            m: 0,
            mx: "auto",
        },
        ul: {
            listStyle: "none",
            px: 3,
            li: {
                py: 2,
            },
        },
    },
    colors: {
        ...roboto.colors,
        background: "tomato",
    },
    style: { ...roboto.styles },
};

export default theme;
