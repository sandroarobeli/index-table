import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import { lightTheme } from "../../theme/theme";

const styles = {
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

const Header = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ padding: "1rem" }}>
        <Typography variant="h6" component="h1" sx={styles.header}>
          S&P 500 Returns 1926 - Present
        </Typography>
        <Button
          disableRipple
          color="inherit"
          onClick={props.onThemeChanged}
          sx={styles.button}
          endIcon={
            props.lightMode ? (
              <DarkModeOutlinedIcon sx={styles.icon} />
            ) : (
              <LightModeIcon sx={styles.icon} />
            )
          }
        >
          {props.lightMode ? "Dark" : "Light"}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
