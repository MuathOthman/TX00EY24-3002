import React from 'react';
import './box.css'

const Box = ({width, height, title, }) => {
    return (
        <div className="box" style={{width: width, height: height}}>
            <div className="box-overlay">

            </div>
            <div className="box-content">
                <div className="box-content-title">
                    <h3>{title}</h3>
                </div>
                <div className="box-content-body">
                    <p>Box Content</p>
                </div>
                <div className="box-content-footer">
                    <p>Box Footer</p>
                </div>

            </div>
        </div>
    );
};

export default Box;