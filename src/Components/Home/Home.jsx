import React from 'react';

import './Home.css'; // Import CSS file for styling


const Singup = () => {
  return (
    <div className="welcome-page fullscreen">
      <h1>Welcome to Our Website</h1>
      <p>Thank you for visiting our website. We hope you find everything you need.</p>
      <div className="buttons">
        <button>Get Started</button>
        <button className="register">Register</button>
        <button className="login">Login</button>
      </div>
    </div>
  );
};

export default Singup;
