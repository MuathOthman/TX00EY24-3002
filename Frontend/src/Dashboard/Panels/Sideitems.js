import React from 'react';
import './CSS/items.css';

const Sideitems = (props) => {
    return (
        <div className="side-panel-button" onClick={props.pressed} style={{background: props.color, width: props.width, height: props.height, paddingTop: props.top}}>
            <span className="icon">{props.image}</span>
            <span className="title" style={{color:props.textcolor}}>{props.title}</span>
        </div>
    );
};

export default Sideitems;