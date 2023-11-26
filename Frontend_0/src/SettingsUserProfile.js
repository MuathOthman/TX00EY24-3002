import React from 'react';
import Sidebar from './Settings/Sidebar';
import Field from './Settings/Field';
import ProfilePicture from './Settings/ProfilePicture';
import { SaveButton } from './AddPropertyPopup/ButtonSave'; 
import SideBottom from './Settings/SideBottom';
import Toggle from './Settings/Toggle';
import './Settings/SettingsCSS.css';


const SettingsUserProfile = () => {
  return (
    <div className="settings-grid-container">
      <Sidebar />
      <SideBottom />
      <div className="settings-content">
        <h1 className='header'>User Profile</h1>
      </div>
      <div className="pfp">
        <ProfilePicture />
        </div>
      <div className="user-content"></div>
      <div className="user-info">
            <Field label="" topLabel="Full Name" type="text" />
            <Field label="" topLabel="Username" type="text" />
            <Field label="" topLabel="Email" type="text" />
            <Field label="" topLabel="Password" type="password" />
            <Field label="" topLabel="Phone Number" type="tel" />
        </div>
        <div className="toggles">
        <Toggle text="Enable Notifications" />
        <Toggle text="Enable Notifications" />
        <Toggle text="Enable Notifications" />
        <div className="password">
          <p className="forgot-text">Forgot password?</p>
          <Field className="pssw-forgot" label="Enter Old password" topLabel="Old Password" type="password" />
          <Field className="pssw-forgot" label="Enter New password" topLabel="New Password" type="password" />
          <Field className="pssw-forgot" label="Confirm New Password" topLabel="New Password" type="password" />
          <SaveButton label="UPDATE PASSWORD" />
        </div>
        </div>
      <div className="save-changes-btn">
        <SaveButton label="UPDATE CHANGES" />
      </div>
    </div>
  );
};

export default SettingsUserProfile;
