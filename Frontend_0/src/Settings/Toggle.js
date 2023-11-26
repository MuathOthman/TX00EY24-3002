import React from 'react';
import './SettingsCSS.css';

const Toggle = ({ text }) => {
  return (
    <div className="toggle-container">
      <p>{text}</p>
      <div className="toggle">
        <input type="checkbox" />
        <label></label>
      </div>
    </div>
  );
};

export default Toggle;