// AccountSection.js
import React from 'react';

const AccountSection = () => {
    const token = localStorage.getItem('token');
    const tokenParts = token.split('.');
    const encodedPayload = tokenParts[1];

    const decodedPayload = atob(encodedPayload);
    const payloadObject = JSON.parse(decodedPayload);
    const userId = payloadObject.userID;
    console.log(String(userId));

    const [first, setFirst] = React.useState("");
    const [last, setLast] = React.useState("");
    const [image, setImage] = React.useState("");

    React.useEffect(() => {
        fetch(`http://localhost:8003/api/users/${String(userId)}`, {
        method: "GET",
        })
        .then(response => response.json())
        .then(data => {
            setFirst(data.firstName);
            setLast(data.lastName);
            setImage(data.image);
        });
    });
    return (
    <div className="profile">
            <div className="profile-name">
                <p>{first} {last}</p>
            </div>
            <div className="profile-image">
                <img src={image} alt="Profile" />
            </div>
        </div>
    );
};

export default AccountSection;
