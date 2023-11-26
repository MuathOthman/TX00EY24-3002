// Button.js
import React from "react";
import { FiCornerDownLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function RegisterButton({ label, onClick }) {
  return <button className="button-black" onClick={onClick}>{label}</button>;
}

// Another Button component with different styling
export function FrontPageButton({ label }) {
  return (
    <button className="button-frontpage">
      <Link to="/">
        <FiCornerDownLeft className="icon" />
        {label}
      </Link>
    </button>
  );
}
