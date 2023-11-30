// Field.js

import React, { useState } from 'react';

function Field({ label, topLabel, type = 'text', fixedText, value, onChange }) {
    const [inputValue, setInputValue] = useState(value || '');

    const handleKeyDown = (e) => {
        if (type === 'currency' && e.key === 'Backspace' && inputValue === '$') {
            e.preventDefault();
        }
    };

    const handleChange = (e) => {
        const newValue = type === 'currency' ? `$${e.target.value.replace(/[^0-9]/g, '')}` : e.target.value;
        setInputValue(newValue);
        onChange(newValue); // Notify parent component about the updated value
    };

    return (
        <div className="textfield">
            {topLabel && <label className="top-label">{topLabel}</label>}
            <input
                type={type}
                placeholder={label}
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            {fixedText && <span className="fixed-text">{fixedText}</span>}
        </div>
    );
}

export default Field;
