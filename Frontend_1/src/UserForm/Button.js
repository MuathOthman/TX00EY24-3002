// Button.js
import React from 'react';
import { FiCornerDownLeft } from 'react-icons/fi';

export function RegisterButton({ label }) {
    return <button className="button-black">{label}</button>;
}



export function LoginButton({ label, onClick }) {
    const handleClick = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        console.log('Button clicked');
        if (onClick) {
            onClick(); // Calls the function passed via props when the button is clicked
        }
    }
    return <button onClick={handleClick} className="button-black">{label}</button>;
}

// Another Button component with different styling
export function FrontPageButton({ label }) {
    return (
        <button className="button-frontpage">
            <FiCornerDownLeft className="icon" />
            {label}
        </button>
    );
}
