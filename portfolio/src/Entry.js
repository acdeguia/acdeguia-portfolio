import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";

import App from "./App";

function Entry() {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default Entry;
