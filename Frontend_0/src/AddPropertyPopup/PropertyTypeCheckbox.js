import React, { useState } from 'react';

const PropertyTypeCheckbox = ({ label, onChange }) => {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked, label);
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {label}
    </label>
  );
};

export default PropertyTypeCheckbox;
