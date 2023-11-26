import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/card.css';
import image3 from "../../DATATESTING/1.jpg";


const Card = ({ _id, address, city, zipcode, image }) => {
    const navigate = useNavigate(); // useNavigate called directly in the component body

    const handleCardClick = () => {
        navigate(`/property/${_id}`);
        console.log(_id);
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
                <div className="kortti-postcode">{zipcode}</div>
            </div>
        </div>
    );
};

export default Card;
