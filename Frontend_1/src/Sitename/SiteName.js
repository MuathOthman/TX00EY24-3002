import React from 'react';
import { FiInfo } from "react-icons/fi";


const SiteName = ({name}) => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0px', marginLeft: '15px'}}>
            <h2 style={{ marginRight: '8px' }}>{name}</h2>
            <FiInfo/>
        </div>
    );
};

export default SiteName;