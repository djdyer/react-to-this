// FROM OG PORTFOLIO

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="contactflex">
        {/* <!-- Social Icons --> */}
        <div id="socials">
          <a href="mailto:david@dyer.design">
            <img
              className="icon"
              src="../../assets/images/social-icons/email-icon.png"
              target="_blank"
              alt="Send Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/mrdavidrdyer/">
            <img
              className="icon"
              src="../../assets/images/social-icons/linkedin_icon.png"
              target="_blank"
              alt="Connect on LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/djdyer">
            <img
              className="icon"
              src="../../assets/images/social-icons/instagram-icon.png"
              target="_blank"
              alt="Follow on Instagram"
            />
          </a>
          <a href="https://www.github.com/djdyer">
            <img
              className="icon"
              src="../../assets/images/social-icons/github_icon.png"
              target="_blank"
              alt="Collaborate on GitHub"
            />
          </a>
          <a href="https://www.behance.net/daviddyer">
            <img
              className="icon"
              src="../../assets/images/social-icons/behance-icon.png"
              target="_blank"
              alt="Be inspired on Behance"
            />
          </a>
          <a href="https://www.prestigemusicgroup.com">
            <img
              className="icon"
              src="../../assets/images/social-icons/prestige-icon.png"
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
