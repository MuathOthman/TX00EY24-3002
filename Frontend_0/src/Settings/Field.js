import React from 'react';
import './SettingsCSS.css';
// FiUserX

function Field({ label, topLabel, type = 'text', fixedText }) {
    return (
      <div className="textfield">
        {topLabel && <label className="top-label">{topLabel}</label>}
        <input type={type} placeholder={label} />
        {fixedText && <span className="fixed-text">{fixedText}</span>}
      </div>
    );
  }

export default Field;