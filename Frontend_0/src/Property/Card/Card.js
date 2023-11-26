import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/card.css';

const Card = ({ id, address, city, postcode, image }) => {
    const navigate = useNavigate(); // useNavigate called directly in the component body

    const handleCardClick = () => {
        navigate(`/property/${id}`);
        console.log(id);
    };

    return (
        <div className="kortti" onClick={handleCardClick}>
            <div className="kortti-overlay">
                <div className="kortti-image">
                    <img src={image} alt={address} />
                </div>
            </div>
            <div className="kortti-content">
                <div className="kortti-address">{address}</div>
                <div className="kortti-location">{city}</div>
                <div className="kortti-postcode">{postcode}</div>
            </div>
        </div>
    );
};

export default Card;
