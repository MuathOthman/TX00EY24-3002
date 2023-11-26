import React from 'react';
import './CSS/menubars.css';
import { FiSearch, FiPlus } from "react-icons/fi";
import Menuitems from "./Menuitems";

const Menubars = () => {
    return (
        <div className="menubar">
            <div className="menubar-title">
                <Menuitems title="Home" />
                <Menuitems title="Advanced Quarry" />
                <Menuitems title="Events" />
                <Menuitems title="Market" />
                <div style={{gap: '2px'}} className="vl"></div>
                <div className="menubar-icons">
                    <Menuitems title=<FiSearch style={{height: '22px', width: '22px'}} /> />
                    <Menuitems title=<FiPlus style={{height: '22px', width: '22px'}} /> />
                </div>
            </div>
        </div>
    );
};

export default Menubars;