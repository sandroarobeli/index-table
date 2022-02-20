import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";

import { styles } from "./styles";

const Header = (props) => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ padding: "1rem" }}>
        <Typography variant="h6" component="h1" sx={styles.header}>
          S&P 500 Returns 1970 - 2021
        </Typography>
        <Button
          aria-label="dark mode switch"
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
