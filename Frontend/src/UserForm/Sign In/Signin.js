import React, { useEffect, useState } from "react";
import Image from "../Image";
import Field from "../Field";
import { RegisterButton, FrontPageButton, LoginButton } from "../Button";
import "../CSS/styles.css";
import "./img.png";
import img from "./img.png";
import axios from "axios"; // If using ES6 modules
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (newValue) => {
    setEmail(newValue);
  };

  const handlePasswordChange = (newValue) => {
    setPassword(newValue);
  };

  const onSubmit = () => {
    const contactUsInformation = {
      email,
      password,
      submittedOn: new Date(),
    };
    console.log(contactUsInformation);
    fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactUsInformation),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong ...");
        }
      })
      .then((data) => {
        const token = data.AuthenticateToken;
        console.log(token);
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        navigate("/");
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  return (
    <div className="container">
      <Image src={img} alt="Description of the image" />
      <div className="alaosa">
        <Link to="/home">
          <FrontPageButton label="Front Page" />
        </Link>
      </div>
      <div className="form-container">
        <h1 className="estatebrew">estatebrew</h1>
        <div class="account">
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <div className="form-fields">
          <Field
            label="Email"
            icon="atSign"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Field
            label="Password"
            icon="lock"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <LoginButton label="SIGN IN" onClick={onSubmit} />
      </div>
    </div>
  );
}

export default Signin;
