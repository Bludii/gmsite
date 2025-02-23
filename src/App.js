import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { loadExternalScripts } from "./utils/loadScripts"; // Adjust path if needed

import Main from "./pages/Main";
import Block from "./pages/Block";
import Plan from "./pages/Plan";
import Apartment from "./pages/Apartment";

const App = () => {
  useEffect(() => {
    loadExternalScripts();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/block" element={<Block />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/apartment" element={<Apartment />} />
      </Routes>
    </Router>
  );
};

export default App;
