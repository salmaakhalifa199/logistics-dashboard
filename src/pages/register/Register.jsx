import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaUser, FaLock  } from "react-icons/fa";
import "./register.scss"
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
  };

  return (
    <div className="register">
      <form onSubmit={handleRegister}>
        <h1>Register</h1>
        <div className="input-container">
        <FaUser  className="icon "/>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
        <FaLock className="icon " />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
        <FaLock className="icon " />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <Link to="/login">Already have an account? Login</Link> {/* Link to the login page */}
      </form>
    </div>
  );
};

export default Register;
