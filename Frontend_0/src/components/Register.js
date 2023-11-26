import React from "react";
import Image from "./Image";
import Field from "./Field";
import { RegisterButton, FrontPageButton } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/signin-image.png";
import { useState } from "react";

function Register() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const createUser = async () => {
        const response = await fetch("http://localhost:4000/api/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            password,
          }),
        });
        const data = await response.json();
        console.log(data);

        if (response.ok) {
          navigate("/Dashboard");
        }
      };
      createUser();
    }
  };

  return (
    <div className="container">
      <Image src={img} alt="Description of the image" />
      <div className="alaosa">
        <FrontPageButton label="Front Page" />
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="estatebrew">estatebrew</h1>
        <div className="account">
          <p>
            Already have an account? <Link to="/Signin">Sign in</Link>
          </p>
        </div>
        <div className="form-fields">
          <Field
            label="First Name"
            icon="user"
            onChange={(firstName) => setFirstname(firstName)}
          />
          <Field
            label="Last Name"
            icon="user"
            onChange={(lastName) => setLastname(lastName)}
          />
          <Field
            label="Email"
            icon="atSign"
            onChange={(email) => setEmail(email)}
          />
          <Field
            label="Password"
            icon="lock"
            type="password"
            onChange={(password) => setPassword(password)}
          />
          <Field
            label="Confirm password"
            icon="lock"
            type="password"
            onChange={(confirmPassword) => setConfirm(confirmPassword)}
          />
        </div>
        <RegisterButton label="REGISTER" type="submit" />
      </form>
    </div>
  );
}

export default Register;
