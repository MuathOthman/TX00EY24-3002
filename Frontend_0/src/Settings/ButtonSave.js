import React from 'react';
import './SettingsCSS.css';

export function SaveButton({ label, onClick }) {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

      return <button className="save-button" onClick={handleClick}>{label}</button>;
  }