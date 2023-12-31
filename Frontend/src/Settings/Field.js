import React from 'react';
import './SettingsCSS.css';
// FiUserX

function Field({ label, topLabel, type = 'text', fixedText, value, disabled=false }) {
    return (
      <div className="textfield">
        {topLabel && <label className="top-label">{topLabel}</label>}
        <input type={type} placeholder={label} value={value} disabled={disabled}/>
        {fixedText && <span className="fixed-text">{fixedText}</span>}
      </div>
    );
  }

export default Field;