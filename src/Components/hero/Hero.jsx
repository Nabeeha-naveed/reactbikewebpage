import React from 'react';
import "./hero.css";
import heroimg from "../../assets/logo.svg";

export default function Hero() {
  return (
  <div className="header">
    <nav className="header--navbar">
      <img
        className="header--navbar-logo"
        src={heroimg}
        alt="logo of website MyBike"
      />
      <div className="header--navbar-icons">
        <div className="header--navbar--icons-phone"></div>
        <div className="header--navbar--icons-menu"></div>
      </div>
    </nav>
    <h1 className="header-title">Take The Streets</h1>
  </div>
  )
}
