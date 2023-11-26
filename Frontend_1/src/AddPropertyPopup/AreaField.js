import React from 'react';

function AreaField({ label, type = 'text', topLabel, fixedText, unitOptions, selectedUnit, onUnitChange }) {
  return (
    <div className="area-field">
        {topLabel && <label className="top-label">{topLabel}</label>}
      <input type={type} placeholder={label} />
      
      {unitOptions && (
        <select className="choose-unit" value={selectedUnit} onChange={(e) => onUnitChange(e.target.value)}>
          {unitOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      
    </div>
  );
}

export default AreaField;
