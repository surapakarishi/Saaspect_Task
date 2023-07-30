import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Audit from "./Pages/Audit";
import Services from "./Pages/Services";
import Blogs from "./Pages/Blogs";
import Work from "./Pages/Work";
import Chat from "./Pages/Chat";
import Nav from "./Components/Nav";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Playfair Display"].join(","),
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/work" element={<Work />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
