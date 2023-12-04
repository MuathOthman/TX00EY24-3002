import React from 'react';
import './CSS/items.css';

const Menuitems = (props) => {
    return (
        <ul className="menu-panel-button">
            <li><a href="#" onClick={props.click}>{props.title}</a></li>
        </ul>
    );
};

export default Menuitems;