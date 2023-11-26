import React from 'react';
import './picturecontainer.css';

const Picturecontainer = ({property}) => {
    console.log(property + "from picturecontainer");
    if (!property) {
        return <h1>LOADING ....</h1>;
    }
    return (
            <div className="picturecontainer">
                <img src={property.image} alt="property"/>
        </div>
    );
}


export default Picturecontainer;
