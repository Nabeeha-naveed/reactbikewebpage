import React from 'react';
import "./hero.css";
import heroimg from "../../assets/logo.svg";

export default function Hero() {
  return (
  <div class="header">
    <nav class="header--navbar">
      <img
        class="header--navbar-logo"
        src={heroimg}
        alt="logo of website MyBike"
      />
      <div class="header--navbar-icons">
        <div class="header--navbar--icons-phone"></div>
        <div class="header--navbar--icons-menu"></div>
      </div>
    </nav>
    <h1 class="header-title">Take The Streets</h1>
  </div>
  )
}
