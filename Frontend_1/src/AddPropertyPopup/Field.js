import React, { useState } from 'react';

function Field({ label, topLabel, type = 'text', fixedText, value, onChange }) {

  return (
    <div className="textfield">
      {topLabel && <label className="top-label">{topLabel}</label>}
      <input
        type={type}
        placeholder={label}
        value={value}
        onChange={onChange}
      />
      {fixedText && <span className="fixed-text">{fixedText}</span>}
    </div>
  );
}

export default Field;
