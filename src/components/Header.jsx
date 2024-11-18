import React from "react";
import profileImage from "./../assets/profile.JPG";
import phoneIcon from "../assets/tel.png";
import emailIcon from "../assets/email.png";
import locationIcon from "../assets/address.png";
import "./../styles/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="profile-image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>

      <div className="profile-details">
        <h1>AUNCHISA CHANATIPAKUL</h1>
        <p>
          <img src={phoneIcon} />
          061-854-7270
        </p>
        <p>
          <img src={emailIcon} />
          pear.aunchisa@gmail.com
        </p>
        <p>
          <img src={locationIcon} />
          Bangkok Yai, Bangkok 10600
        </p>
      </div>
    </div>
  );
}

export default Header;
