import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { theme } from "./themes/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />

      <Navbar />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
