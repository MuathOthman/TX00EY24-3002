import React from 'react';
import { FiMenu, FiCommand, FiPieChart, FiClock, FiGlobe, FiLoader, FiMoon, FiLogOut } from "react-icons/fi";
import './CSS/sidenav.css';
import './CSS/items.css';
import Sideitems from "./Sideitems";
import { NavLink } from 'react-router-dom';


const Sidenav = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/';
    }
    return (
        <div className="side-panel">
            <Sideitems image=<FiMenu style={{color: '#D0D1D2', width: '30px', height: '30px', flexShrink: 0, marginTop: '10px'}} /> />
                <div className="divider-container" style={{ marginTop: '5px', marginBottom: '10px'}}>
                <div className="divider"></div>
            </div>
            <Sideitems color="#43C59E" height="40px" width="40px" />
            <Sideitems color="#3D7068" height="40px" width="40px"/>
            <Sideitems color="#14453D" height="40px" width="40px"/>
            <div className="divider-container">
                <div className="divider"></div>
            </div>
            <div className="menu">
                <NavLink to="/" activeClassName="active">
                    <Sideitems height="20px" width="auto" image=<FiCommand style={{color: '#D0D1D2', width: '14px', height: '14px', flexShrink: 0,}} /> />
                </NavLink>
                <NavLink to={'/property'} activeClassName="active">
                    <Sideitems height="20px" width="auto"  image=<FiPieChart style={{color: '#D0D1D2', width: '14px', height: '14px', flexShrink: 0, paddingTop: '2px'}} /> />
                </NavLink>
                <NavLink to={'/property10'} activeClassName="active">
                    <Sideitems height="20px" width="auto" image=<FiClock style={{color: '#D0D1D2', width: '14px', height: '14px', flexShrink: 0, paddingTop: '2px'}} /> />
                </NavLink>
                <NavLink to={'/property1'} activeClassName="active">
                    <Sideitems height="20px" width="auto" image=<FiGlobe style={{color: '#D0D1D2', width: '14px', height: '14px', flexShrink: 0, paddingTop: '2px'}} /> />
                </NavLink>
                <NavLink to={'/property2'} activeClassName="active">
                    <Sideitems height="20px" width="auto"  image=<FiLoader style={{color: '#D0D1D2', width: '14px', height: '14px', flexShrink: 0, paddingTop: '2px'}} /> />
                </NavLink>
                </div>
            <div className="divider-container" style={{marginTop: '100%'}}>
                <div className="divider"></div>
            </div>
            <Sideitems pressed={handleLogout} color="#F8F9FE" height="40px" width="40px" />
            <Sideitems color="#F8F9FE" height="40px" width="40px" />
        </div>
    );
};

export default Sidenav;
