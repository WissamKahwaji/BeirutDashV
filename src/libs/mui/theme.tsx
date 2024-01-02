import React, { FC, PropsWithChildren } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const MuiTheme: FC<PropsWithChildren<{}>> = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#D1A775",
      },
      secondary: {
        main: "#593205",
      },
    },
    components: {},
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MuiTheme;
