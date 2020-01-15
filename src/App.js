import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";
import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={{ mode: "light" }}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
