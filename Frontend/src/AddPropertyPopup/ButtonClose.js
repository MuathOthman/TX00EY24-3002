import React from 'react';
import { FiX } from 'react-icons/fi';
import './PropertyPopUpCSS.css';

export function ButtonClose({ label, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
      <button className="button-close" onClick={handleClick}>
        <FiX className="icon" />
        {label}
      </button>
  );
}