import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";

import { lightTheme, darkTheme } from "./theme/theme";

const App = () => {
  const [lightMode, setLightMode] = useState(true);
  const switchTheme = () => {
    setLightMode((prevMode) => !prevMode);
  };
  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <Typography>this is our table of contents</Typography>
      <Typography
        sx={{
          background: "#2780E3",
        }}
      >
        this is our table of contents
      </Typography>
      <Typography sx={{ background: lightTheme.palette.secondary.main }}>
        this is our table of contents
      </Typography>
      <Typography sx={{ background: lightTheme.palette.error.main }}>
        this is our table of contents
      </Typography>
      <Typography sx={{ background: lightTheme.palette.success.main }}>
        this is our table of contents
      </Typography>
      <button onClick={switchTheme}>Theme</button>
    </ThemeProvider>
  );
};

export default App;
