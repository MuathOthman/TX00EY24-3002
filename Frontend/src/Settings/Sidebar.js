import React from 'react';
import './SettingsCSS.css';
import { FiUser, FiHome, FiCreditCard } from 'react-icons/fi';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className='sidebar-text'>
      <li className='sidebar-link'>
          <FiHome className="icon"/> Home
        </li>
        <li className='sidebar-link'>
          <FiUser className="icon"/> Profile
        </li>
        <li className='sidebar-link'>
          <FiCreditCard className="icon"/> Subscription & Purchases
        </li>
      </ul>
    </div>
    
    

  );
};

export default Sidebar;