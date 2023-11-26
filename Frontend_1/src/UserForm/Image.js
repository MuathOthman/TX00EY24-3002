// Image.js
import React from 'react';

// Import the image
import img from './Register/img.png';

function Image() {
    return (
        <img
            src={img}  // Use the imported image
            alt="Description of the image"
            className="company-logo"
        />
    );
}

export default Image;