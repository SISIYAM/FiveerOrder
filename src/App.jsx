import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Services from "./pages/Services";
import Layout from "./components/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
    </Routes>
  );
}

export default App;
