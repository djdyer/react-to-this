import React from "react";

export default function Footer() {
  const email = require("../../src/assets/images/social-icons/email_icon.png");
  const linkedIn = require("../../src/assets/images/social-icons/linkedin_icon.png");
  const instagram = require("../../src/assets/images/social-icons/instagram_icon.png");
  const github = require("../../src/assets/images/social-icons/github_icon.png");
  const behance = require("../../src/assets/images/social-icons/behance_icon.png");
  const prestige = require("../../src/assets/images/social-icons/prestige_icon.png");

  return (
    <div>
      <footer id="contactflex">
        {/* <!-- Social Icons --> */}
        <div id="socials">
          <a href="mailto:david@dyer.design">
            <img
              className="icon"
              src={email}
              target="_blank"
              alt="Send Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/mrdavidrdyer/">
            <img
              className="icon"
              src={linkedIn}
              target="_blank"
              alt="Connect on LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/djdyer">
            <img
              className="icon"
              src={instagram}
              target="_blank"
              alt="Follow on Instagram"
            />
          </a>
          <a href="https://www.github.com/djdyer">
            <img
              className="icon"
              src={github}
              target="_blank"
              alt="Collaborate on GitHub"
            />
          </a>
          <a href="https://www.behance.net/daviddyer">
            <img
              className="icon"
              src={behance}
              target="_blank"
              alt="Be inspired on Behance"
            />
          </a>
          <a href="https://www.prestigemusicgroup.com">
            <img
              className="icon"
              src={prestige}
              target="_blank"
              alt="Support The Prestige Music Group"
            />
          </a>
        </div>

        <h6>
          <a href="https://www.dyer.design">https://www.dyer.design</a>
        </h6>
      </footer>
    </div>
  );
}
