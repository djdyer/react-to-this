// FROM OG PORTFOLIO

import React from "react";

export default function Footer() {
  return (
    <div>
      <footer id="contactflex">
        <address>
          <ul>
            <h4>
              <li>david@dyer.designs</li>
              <li>Atlanta, GA</li>
            </h4>
          </ul>
        </address>

        {/* <!-- Social Icons --> */}
        <div id="socials">
          <a href="mailto:david@dyer.design">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_Mail_Blue.png"
              target="_blank"
              alt="Send Email"
            />
          </a>
          <a href="https://www.linkedin.com/in/mrdavidrdyer/">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_Linkedin_Blue.png"
              target="_blank"
              alt="Connect on LinkedIn"
            />
          </a>
          <a href="https://www.instagram.com/djdyer">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_Instagram_Blue.png"
              target="_blank"
              alt="Follow on Instagram"
            />
          </a>
          <a href="https://www.github.com/djdyer">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_github_blue.png"
              target="_blank"
              alt="Collaborate on GitHub"
            />
          </a>
          <a href="https://www.behance.net/daviddyer">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_behance_blue.png"
              target="_blank"
              alt="Be inspired on Behance"
            />
          </a>
          <a href="https://www.prestigemusicgroup.com">
            <img
              class="icon"
              src="Images/Custom_Social_Icons_prestige_blue.png"
              target="_blank"
              alt="Support The Prestige Music Group"
            />
          </a>
          <a
            href="./assets/David_Dyer_Resume_ATS_2022.png"
            download="Resume_DavidDyer_2022"
          >
            <img
              class="icon"
              src="Images/resume_button3.png"
              target="_blank"
              alt="Download Resume"
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
