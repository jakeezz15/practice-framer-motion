import {
  createTheme,
  responsiveFontSizes,
  Theme,
  ThemeOptions,
} from "@mui/material";
import { red } from "@mui/material/colors";

type CustomThemeProperties = {
  prefersDarkMode: boolean;
};
const theme = (additionalProps: CustomThemeProperties): Theme => {
  const { prefersDarkMode } = additionalProps;
  const customTheme: ThemeOptions = {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    palette: {
      mode: prefersDarkMode ? "dark" : "light",
      primary: {
        main: "#ec5b2b",
        light: "#ff8c58",
        dark: "#ff8c58",
      },
      secondary: {
        main: "#0F254C",
        light: "#3e4d78",
        dark: "#000024",
      },
      error: {
        main: "#ff0000",
      },
      success: {
        main: "#2e7d32",
      },
      info: {
        main: "#EEEEF0",
      },
      warning: {
        main: "#ed6c02",
      },
    },
    typography: {
      htmlFontSize: 16,
      fontSize: 14,
      fontWeightBold: 300,
      fontFamily: [
        `'Exo 2'`,
        "-apple-system",
        "BlinkMacSystemFont",
        "Roboto",
        "Oxygen",
      ].join(","),
    },
  };
  return createTheme({
    ...customTheme,
  });
};

const themeCreator = (params: CustomThemeProperties) =>
  responsiveFontSizes(theme(params));

export default themeCreator;
