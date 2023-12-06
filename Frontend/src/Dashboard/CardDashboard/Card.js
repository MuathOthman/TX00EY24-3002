import React from 'react';
import './CSS/card.css'

const Card = ({key, address, city, postcode, image}) => {
    return (
        <div className="card" >
            <div className="card-overlay">
                <div className="card-image">
                    <img src={image} alt={address}/>
                </div>
            </div>
            <div className="card-content">
                <div className="card-address">{address}</div>
                <div className="card-location">{city}</div>
                <div className="card-postcode">{postcode}</div>
            </div>
        </div>
    );
};

export default Card;