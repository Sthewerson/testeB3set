import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Menu from "./components/Menu";
import Pessoa from "./pages/Pessoa";
import Home from "./pages/Home";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa/:id" element={<Pessoa />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
