import React from "react";
import "./SettingsCSS.css";
import { FiUser, FiHome, FiCreditCard } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="settings-sidebar">
      <ul className="settings-sidebar-text">
        <li className="settings-sidebar-link">
            <FiHome className="icon" /> Home
        </li>
        <li className="settings-sidebar-link">
            <FiUser className="icon" /> Profile
        </li>
        <li className="settings-sidebar-link">
            <FiCreditCard className="icon" /> Subscription & Purchases
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
