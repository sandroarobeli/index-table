import { lightTheme } from "../../theme/theme";

export const styles = {
  paper: {
    width: "100%",
    overflow: "auto",
    margin: "3rem auto 3rem auto",
    paddingBottom: "3rem",
  },
  sliderBox: {
    width: "80%",
    margin: "auto auto 2rem auto",
  },
  sliderInstruction: {
    flexGrow: 1,
    fontsize: "1rem",
    marginBottom: "2rem",
    fontWeight: 600,
    [lightTheme.breakpoints.up("mobile")]: {
      fontSize: "1.25rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      fontSize: "1.5rem",
    },
  },
  tableBox: {
    margin: "auto",
    width: "95%",
    maxHeight: "80vh",
  },
  headCell: {
    minWidth: "3rem",
    fontSize: "0.75rem",
    fontWeight: 700,
    padding: "1rem 1rem 1rem 1.5rem",
    [lightTheme.breakpoints.up("mobile")]: {
      minWidth: "5rem",
      fontSize: "1rem",
    },
    [lightTheme.breakpoints.up("tablet")]: {
      minWidth: "10rem",
      fontSize: "1.25rem",
    },
  },
};
