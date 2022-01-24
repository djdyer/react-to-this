import React from "react";

export default function Header() {
  let logo = require("../../src/assets/images/logos/dd_logo.png");
  return (
    <header className="hero">
      <nav>
        <div id="logolockup">
          <a href="https://dyer.design">
            <img
              id="logo"
              src={logo}
              target="_blank"
              alt="Dyer Design Lettermark"
            />
          </a>
          <h1>DYER DESIGN</h1>
        </div>
        <div>
          <a href="#about">ABOUT</a>
          <a href="#work">WORK</a>
          <a href="#work">RESUME</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
    </header>
  );
}
