import Image from "./Image";
import Field from "./Field";
import { RegisterButton, FrontPageButton } from "./Button";
import "../components/styles/SignIn.css";
import img from "../assets/images/signin-image.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const loginUser = async () => {
      const response = await fetch("http://localhost:4000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
    };
    loginUser();
  };

  return (
    <div className="container">
      <Image src={img} alt="Description of the image" />
      <div className="alaosa">
        <FrontPageButton label="Front Page" />
      </div>
      <form className="form-container" onSubmit={handleLogin}>
        <h1 className="estatebrew">estatebrew</h1>
        <div className="account">
          <p>
            Don't have an account? <Link to="/Register">Register</Link>
          </p>
        </div>
        <div className="form-fields">
          <Field
            label="Email"
            icon="atSign"
            type="email"
            onChange={(email) => setEmail(email)}
          />
          <Field
            label="Password"
            icon="lock"
            type="password"
            onChange={(password) => setPassword(password)}
          />
        </div>
        <RegisterButton label="SIGN IN" type="submit" />
      </form>
    </div>
  );
};
