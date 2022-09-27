import React from "react";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Initiatives from "./components/Initiatives";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
