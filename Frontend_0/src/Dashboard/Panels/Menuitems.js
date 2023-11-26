import React from 'react';
import './CSS/items.css';

const Menuitems = (props) => {
    return (
        <ul className="menu-panel-button">
            <li><a className={props.active} href="#">{props.title}</a></li>
        </ul>
    );
};

export default Menuitems;