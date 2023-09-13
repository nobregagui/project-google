import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Results from "./components/templates/ResultSeacrh/Result";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
