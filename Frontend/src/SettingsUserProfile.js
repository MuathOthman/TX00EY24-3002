import React, { useEffect } from "react";
import Sidebar from "./Settings/Sidebar";
import Field from "./Settings/Field";
import ProfilePicture from "./Settings/ProfilePicture";
import { SaveButton } from "./AddPropertyPopup/ButtonSave";
import SideBottom from "./Settings/SideBottom";
import Toggle from "./Settings/Toggle";
import "./Settings/SettingsCSS.css";
const SettingsUserProfile = () => {
  const token = localStorage.getItem("token");
  const tokenParts = token.split(".");
  const encodedPayload = tokenParts[1];

  const decodedPayload = atob(encodedPayload);
  const payloadObject = JSON.parse(decodedPayload);
  const userId = payloadObject.userID;

  console.log(String(userId)); // Outputting the user ID
  const [name, setName] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  useEffect(() => {
    fetch(`/api/users/${String(userId)}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setName(data.firstName);
        setUsername(data.lastName);
        setEmail(data.email);
        setPhone(data.phone);
        setPassword(data.password);
        setImage(data.image);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="grid-containers">
      <div className="content"></div>
      <div className="pfp">
        <ProfilePicture fetchedImage={image} />
      </div>
      <div className="user-content"></div>
      <div className="user-info">
        <Field label="" topLabel="Full Name" type="text" value={name} />
        <Field label="" topLabel="Username" type="text" value={username} />
        <Field label="" topLabel="Email" type="text" value={email} />
        <Field label="" topLabel="Password" type="password" value={password} />
        <Field label="" topLabel="Phone Number" type="tel" value={phone} />
      </div>
      <div className="toggles">
        <Toggle text="Email Notifications" />
        <Toggle text="Dark Mode" />
        <Toggle text="Allow Data Sharing" />
        <div className="password">
          <p className="forgot-text">Change your password</p>
          <Field
            className="pssw-forgot"
            label="Enter Old password"
            topLabel="Old Password"
            type="password"
          />
          <Field
            className="pssw-forgot"
            label="Enter New password"
            topLabel="New Password"
            type="password"
          />
          <Field
            className="pssw-forgot"
            label="Confirm New Password"
            topLabel="New Password"
            type="password"
          />
          <SaveButton label="UPDATE PASSWORD" />
        </div>
      </div>
      <div className="save-changes-btn-settings">
        <SaveButton label="UPDATE CHANGES" />
      </div>
    </div>
  );
};

export default SettingsUserProfile;
