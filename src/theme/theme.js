import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 685,
      laptop: 900,
    },
  },
  typography: {
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 16,
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  palette: {
    mode: "light",
    error: {
      main: "#FF0039",
    },
    success: {
      main: "#009688",
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 685,
      laptop: 900,
    },
  },
  typography: {
    fontFamily: "Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    fontSize: 16,
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
  },
  palette: {
    mode: "dark",
    error: {
      main: "#FF0039",
    },
    success: {
      main: "#009688",
    },
  },
});
