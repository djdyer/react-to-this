import React from "react";

// We are passing the currentPage from state and the function to update it
export default function Header({ currentPage, handlePageChange }) {
  const logo = require("../../src/assets/images/logos/dd_logo.png");
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
          <div>
            <h1 id="name">DYER</h1>
            <h1 id="name2">DESIGN</h1>
          </div>
        </div>

        <div>
          <a
            href="#work"
            onClick={() => handlePageChange("Work")}
            className={currentPage === "Work" ? "h1active" : ""}
          >
            <h1>WORK</h1>
          </a>

          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={currentPage === "Resume" ? "h1active" : ""}
          >
            <h1>RESUME</h1>
          </a>

          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "h1active" : ""}
          >
            <h1>ABOUT</h1>
          </a>

          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={currentPage === "Contact" ? "h1active" : ""}
          >
            <h1>CONTACT</h1>
          </a>
        </div>
      </nav>
    </header>
  );
}
