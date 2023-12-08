import React from "react";
import Image from "../Image";
import Field from "../Field";
import { RegisterButton, FrontPageButton } from "../Button";
import "../CSS/styles.css";
import "./img.png";
import img from "./img.png";
import { Link } from "react-router-dom";

function Register() {
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
            Already have an account? <Link to="signin">Sign in</Link>
          </p>
        </div>
        <div className="form-fields">
          <Field label="First Name" icon="user" />
          <Field label="Last Name" icon="user" />
          <Field label="Username" icon="userCheck" />
          <Field label="Email" icon="atSign" />
          <Field label="Password" icon="lock" type="password" />
        </div>
        <RegisterButton label="REGISTER" />
      </div>
    </div>
  );
}

export default Register;
