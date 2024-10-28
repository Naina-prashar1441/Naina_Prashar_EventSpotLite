import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [signIn, setSignIn] = useState("SignIn");

  const handleSignInButton = () => {
    setSignIn(signIn === "SignIn" ? "SignOut" : "SignIn");
  };

  return (
    <div className="header">
      <div className="header-content">
        <div className="profile-image">
          <img
            className="image"
            alt="profile-photo"
            src="https://c0.wallpaperflare.com/preview/684/566/377/backlit-beach-blue-dark-blue.jpg"
          />
        </div>
        <div className="title-section">
          <h1 className="title">EventSpot Lite</h1>
          <div className="button-group">
            
            <button className="sign-in-button" onClick={handleSignInButton}>
              {signIn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
