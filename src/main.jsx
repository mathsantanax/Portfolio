import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import "./i18n.js";
import App from "./view/App.jsx";
import Card from "./view/pages/Card.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);