import React, {useEffect, useState} from "react";
import Image from "../Image";
import Field from "../Field";
import { RegisterButton, FrontPageButton } from "../Button";
import "../CSS/styles.css";
import "./img.png";
import img from "./img.png";
import {Link, useNavigate} from "react-router-dom";

function Register() {
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirm] = useState("");
    const [image, setImage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
        } else {
            const createUser = async () => {
                const response = await fetch("/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        email,
                        password,
                        image,
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
                        label="Profile picture"
                        icon="user"
                        onChange={(image) => setImage(image)}
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