import React from 'react';
import './DataCard.css'; // Import the CSS file

const DataCard = ({ title, value }) => {
    return (
        <div className="data-card">
            <h3 className="data-card-title">{title}</h3>
            <p className="data-card-value">{value}</p>
        </div>
    );
};

export default DataCard;
