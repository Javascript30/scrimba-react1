import React from "react";
import reactLogo from "../images/logo192.png";

export default function Navbar(props) {
  return (
    <nav className={`nav ${props.darkMode ? "dark" : ""} `}>
      <div className="logo">
        <img src={reactLogo} alt="logo-img" width="29.93px" />
        <h1>ReactFacts</h1>
      </div>

      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}
