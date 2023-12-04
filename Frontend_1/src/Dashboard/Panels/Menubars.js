import React from 'react';
import './CSS/menubars.css';
import { FiSearch, FiPlus } from "react-icons/fi";
import Sideitems from "./Sideitems";
import Menuitems from "./Menuitems";
import { NavLink } from 'react-router-dom';
import PopUpForm from "../../PopUpForm";
import AccountSection from "./AccountSection";


const Menubars = () => {
    const [active, setActive] = React.useState(false);
    const handleToggle = () => {
        setActive(!active);
        console.log(active);
    };

    return (
        <div className="menubar">
            <div className="menubar-title">
                <Menuitems title="Home" />
                <Menuitems title="Advanced Quarry" />
                <Menuitems title="Events" />
                <Menuitems title="Market" />
                <div style={{ gap: '2px' }} className="vl"></div>
                <div className="menubar-icons">
                    <Menuitems title={<FiSearch style={{ height: '22px', width: '22px' }} />} />
                    <NavLink to={"/add-property"}>
                    <Menuitems title={<FiPlus style={{ height: '22px', width: '22px' }} />} />
                    </NavLink>
                </div>
                <AccountSection />
            </div>
        </div>
    );
};

export default Menubars;
