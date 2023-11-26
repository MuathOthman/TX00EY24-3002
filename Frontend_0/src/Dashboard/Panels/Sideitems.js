import React from "react";
import "./CSS/sidenav.css";

const Sideitems = (props) => {
  return (
    <div
      className="side-panel-button"
      style={{
        background: props.color,
        width: props.width,
        height: props.height,
        paddingTop: props.top,
      }}
    >
      <span className="side-panel-icon">{props.image} </span>
      <span className="title">{props.text}</span>
    </div>
  );
};

export default Sideitems;
