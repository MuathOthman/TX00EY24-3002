import React, { useState } from 'react';

function Field({ label, topLabel, type = 'text', fixedText }) {
  const [value, setValue] = useState(type === 'currency' ? '$' : '');

  const handleKeyDown = (e) => {
    if (type === 'currency' && e.key === 'Backspace' && value === '$') {
      e.preventDefault();
    }
  };

  const handleChange = (e) => {
    if (type === 'currency') {
      const inputValue = e.target.value.replace(/[^0-9]/g, ''); 
      setValue('$' + inputValue);
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div className="textfield">
      {topLabel && <label className="top-label">{topLabel}</label>}
      <input
        type={type}
        placeholder={label}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      {fixedText && <span className="fixed-text">{fixedText}</span>}
    </div>
  );
}

export default Field;
