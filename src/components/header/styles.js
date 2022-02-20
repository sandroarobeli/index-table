import { lightTheme } from "../../theme/theme";

export const styles = {
  toolbar: {
    padding: "1rem",
  },
  header: {
    flexGrow: 1,
    fontsize: "0.75rem",
    [lightTheme.breakpoints.up("mobile")]: {
      fontSize: "1rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      fontSize: "1.25rem",
    },
  },
  button: {
    fontSize: "0.855rem",
    [lightTheme.breakpoints.up("mobile")]: {
      fontSize: "0.865rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      fontSize: "0.875rem",
    },
    "&: hover": {
      color: lightTheme.palette.secondary.main,
      background: "inherit",
    },
    "&: active": {
      color: lightTheme.palette.secondary.main,
      background: "inherit",
    },
  },
  icon: {
    width: "1rem",
    height: "1rem",
    [lightTheme.breakpoints.up("mobile")]: {
      width: "1.5rem",
      height: "1.5rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      width: "2rem",
      height: "2rem",
    },
  },
};
