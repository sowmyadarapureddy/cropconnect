import React, { useState } from 'react';
import './FarmerProfile.css';
import { Link } from 'react-router-dom';

const FarmerProfile = () => {
  const [isLoginMode, setIsLoginMode] = useState(true); // Toggle between login and signup

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, add your logic to handle login or signup
    console.log("Form submitted");
    // For demonstration, logging to the console. Replace with actual logic.
  };

  const toggleMode = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className="farmer-profile">
      <h2>{isLoginMode ? "Farmer Login" : "Farmer Signup"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLoginMode && (
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
          </div>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        {isLoginMode ? (
          <button type="submit"><Link to="/login2">Login</Link></button>
        ) : (
          <button type="submit">Signup</button>
        )}
      </form>
      <button onClick={toggleMode}>
        {isLoginMode ? "Need an account? Sign up" : "Have an account? Log in"}
      </button>
    </div>
  );
};

export default FarmerProfile;
