// FROM OG PORTFOLIO

import React from "react";

export default function Header() {
  return (
    <header class="hero">
      <nav>
        <div id="logolockup">
          <a href="https://dyer.design">
            <img
              id="logo"
              src="Images/DD_logo_LARGE_NOBACK.png"
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
