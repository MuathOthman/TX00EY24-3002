import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import "./index.css";
import App from "./App";
import MainDashboard from "./components/MainDashboard";
import { Signin } from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Property from "./Property/Property";
import Single from "./Property/Single/Single";
import Sidenav from "./Dashboard/Panels/Sidenav";
import SettingsUserProfile from "./SettingsUserProfile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Dashboard" element={<MainDashboard />} />
        <Route path="/property" element={<Property />} />
        <Route path="/settings" element={<SettingsUserProfile />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
