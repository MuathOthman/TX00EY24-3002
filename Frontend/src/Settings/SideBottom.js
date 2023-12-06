import React from 'react';
import './SettingsCSS.css';
import { FiLogOut, FiSettings } from 'react-icons/fi';
const SideBottom = () => {
  return (
    <div className="side-bottom">
      <ul>
      <li>
          <FiSettings className="icon"/> Settings
        </li>
        <li>
          <FiLogOut className="icon"/> Log Out
        </li>
      </ul>
    </div>
  );
};

export default SideBottom;