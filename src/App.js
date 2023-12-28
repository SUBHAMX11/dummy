import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import ReportPage from "./Component/ReportPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/report" exact element={<ReportPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
