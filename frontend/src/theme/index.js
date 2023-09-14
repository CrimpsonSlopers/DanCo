import React from "react";
import { createTheme } from "@mui/material/styles";


import colors from "./base/colors";
import globals from "./base/globals";
import container from "./components/container";

export const theme = createTheme({

    typography: { fontFamily: 'Lexend' },
    palette: {
        ...colors,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container,
            },
        },
    },
});