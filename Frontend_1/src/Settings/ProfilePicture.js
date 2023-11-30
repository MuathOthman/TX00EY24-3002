import React, { useState, useRef } from 'react';
import './SettingsCSS.css';

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="profile-picture-container">
      <div className="image-container">
        {image ? (
          <img src={image} alt="Profile" className="profile-image" />
        ) : (
          <div className="placeholder"></div>
        )}
      </div>
      <div className="file-input-wrapper">
        <button type="button" onClick={handleButtonClick}>
          Choose Profile Picture
        </button>
        <span className="file-name">{image ? 'File chosen' : 'No file chosen'}</span>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInputRef}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ProfilePicture;
