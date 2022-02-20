import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { lightTheme, darkTheme } from "./theme/theme";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

const App = () => {
  const [lightMode, setLightMode] = useState(true);

  const handleThemeChange = () => {
    setLightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <Header onThemeChanged={handleThemeChange} lightMode={lightMode} />
      <Table />
    </ThemeProvider>
  );
};

export default App;
