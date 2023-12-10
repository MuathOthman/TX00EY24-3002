import React from 'react';
import '../CSS/minicard.css'

const Minicard = ({data1, data2, data3, data4, data5, data6}) => {
    return (
        <div className="minicard">
            <div className="minicard1">
                <h4 className="data-card-title">Year profit</h4>
                <p className="data-card-value">{data1}€</p>
            </div>
            <div className="minicard2">
                <h4 className="data-card-title">Monthly profit</h4>
                <p className="data-card-value">{data2}€</p>
            </div>
            <div className="minicard3">
                <h4 className="data-card-title">Property type</h4>
                <p className="data-card-value">{data3}</p>
            </div>
            <div className="minicard4">
                <h4 className="data-card-title">Maintenance needed</h4>
                <p className="data-card-value">{String(data4)}</p>
            </div>
            <div className="minicard5">
                <h4 className="data-card-title">Availability</h4>
                <p className="data-card-value">{String(data5)}</p>
            </div>
            <div className="minicard6">
                <h4 className="data-card-title">Something</h4>
                <p className="data-card-value">{data6}</p>
            </div>
        </div>
    );
};

export default Minicard;