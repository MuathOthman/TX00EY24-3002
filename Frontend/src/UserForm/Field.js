import React from 'react';
import { FiUser, FiAtSign, FiLock, FiUserCheck } from 'react-icons/fi';
import './CSS/styles.css';

const iconComponents = {
    user: <FiUser />,
    atSign: <FiAtSign />,
    lock: <FiLock />,
    userCheck: <FiUserCheck />,
};

function Field({ label, icon, type = 'text', value, onChange }) {
    const iconComponent = iconComponents[icon] || null;

    return (
        <div className="fields-signin-container">
            <div className='icon-signin-wrapper'>
                {iconComponent} {}
                </div>

            <input className='user-field-signin'
                type={type}
                placeholder={label}
                value={value}
                onChange={(e) => onChange(e.target.value)} // Use onChange directly here
            />
        </div>
    );
}

export default Field;