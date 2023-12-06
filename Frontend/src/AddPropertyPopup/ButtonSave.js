import React from 'react';
import './PropertyPopUpCSS.css';

export function SaveButton({ label, onClick }) {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return <button className="save-button" onClick={handleClick}>{label}</button>;
}