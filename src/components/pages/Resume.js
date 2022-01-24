import React from "react";

export default function Resume() {
  let resume = require("../../assets/resume/resume_button3.png");
  let pepperSquare = require("../../assets/images/logos/pepper_square.png");
  let fiveThirty = require("../../assets/images/logos/530.png");
  let oaklandish = require("../../assets/images/logos/oaklandish.png");
  let theHundreds = require("../../assets/images/logos/thehundreds.png");
  let prestige = require("../../assets/images/logos/prestige_logo.png");
  let gaTech = require("../../assets/images/logos/ga_tech.png");
  let ucb = require("../../assets/images/logos/berkeley.png");
  let ucf = require("../../assets/images/logos/ucf.png");
  let valencia = require("../../assets/images/logos/valencia.png");

  return (
    <div>
      {/* <!-- All Work Experience  --> */}

      <section className="experience">
        <div>
          <h1>EXPERIENCE</h1>
          <a
            href="../../assets/resume/David_Dyer_Resume_Personal_2022.pdf"
            download="Resume_DavidDyer_2022"
          >
            <img
              className="icon"
              src={resume}
              target="_blank"
              alt="Download Resume"
            />
          </a>
        </div>
        <article>
          <h2>UX/UI DESIGN INTERN // PEPPER SQUARE</h2>
          <h4>2021</h4>
          <div className="flexwork">
            <img
              className="logos"
              src={pepperSquare}
              alt="Pepper Square Logo"
            />
            <ul>
              <li>
                Developed web and mobile screens for a range of in-house and
                client side projects.
              </li>
              <li>
                Created prototype demos to present user flow, featuring device
                mocks and micro-interactions.
              </li>
              <li>
                Contributed multiple illustrations to support blog article
                content in visual design.
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h2>FREELANCE UX DESIGNER // 530 MEDIA LAB</h2>
          <h4>2020-2021</h4>
          <div className="flexwork">
            <img className="logos" src={fiveThirty} alt="530 Media Lab Logo" />
            <ul>
              <li>
                Led mobile application UX Design from concept to prototype.
              </li>
              <li>
                Produced the Color Selector and Profile Selector mobile
                applications --c/o Vinyl Visions; a leading supplier of vinyl
                door and window trim.
              </li>
              <li>
                Delivered fully narrated product demos to technical, business,
                and creative stakeholders showcasing functionality and value.
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h2>ECOMMERCE OPERATIONS MANAGER // OAKLANDISH</h2>
          <h4>2018-2020</h4>
          <div className="flexwork">
            <img className="logos" src={oaklandish} alt="Oaklandish Logo" />
            <ul>
              <li>
                Directed enhanced end-to-end eCommerce operations for prominent,
                Bay-Area apparel brand housing up to 7 sub-label or 3PL product
                lines, simultaneously.
              </li>
              <li>
                Independently published/merchandised all web shops, handling
                fulfillment, logistics, and CRM for each brand through a
                streamlined, omni-channel approach.
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h2>E-COMMERCE SALES MANAGER // THE HUNDREDS</h2>
          <h4>2009-2017</h4>
          <div className="flexwork">
            <img className="logos" src={theHundreds} alt="The Hundreds Logo" />
            <ul>
              <li>
                Effectively spearheaded online sales activity for this
                quintessential, lifestyle-apparel brand; publishing all
                collections/collaborations, in tandem with the launch and
                analysis of digital marketing campaigns.
              </li>
              <li>
                Hired, trained, and managed team up to one dozen, while scaling
                processing yield nearly 400%
              </li>
              <li>
                Successfully executed multiple dashboard migrations, platform
                integrations, and website redesigns; serving as liaison to
                third-party development agencies.
              </li>
            </ul>
          </div>
        </article>

        <article>
          <h2>
            CO-FOUNDER / CREATIVE DIRECTOR //
            <strong>PRESTIGE MUSIC GROUP</strong>
          </h2>
          <h4>2007-Present</h4>
          <div className="flexwork">
            <img
              className="logos"
              src={prestige}
              alt="Prestige Music Group Logo"
            />
            <ul>
              <li>
                Impassioned director of established record label featuring music
                catalogs available in both digital and physical formats.
              </li>
              <li>
                Established web presence across key platforms, coupled with a
                comprehensive rebranding initiative.
              </li>
              <li>
                Launched partnership with Triple Vision Record
                Distribution--Rotterdam, to break into European market.
              </li>
            </ul>
          </div>
        </article>
      </section>

      {/* <!-- All Education --> */}
      <section className="education">
        <h1>EDUCATION</h1>
        <div className="flexgrid">
          <article className="flexschool">
            <img className="logos" src={gaTech} alt="GA Tech Logo" />
            <ul>
              <h2>GA INSTITUTE OF TECHNOLOGY</h2>
              <h4>2022</h4>
              <h5>Full Stack Web Dev - The Bootcamp Spot</h5>
            </ul>
          </article>

          <article className="flexschool">
            <img className="logos" src={ucb} alt="UCBerkeley Logo" />
            <ul>
              <h2>UC BERKELEY EXT.</h2>
              <h4>2020</h4>
              <h5>Professional Certification in UX Design</h5>
            </ul>
          </article>

          <article className="flexschool">
            <img className="logos" src={ucf} alt="UCF Logo" />
            <ul>
              <h2>UNIVERSITY OF CENTRAL FLORIDA</h2>
              <h4>2007</h4>
              <h5>BA Entrepreneurial Management</h5>
            </ul>
          </article>

          <article className="flexschool">
            <img className="logos" src={valencia} alt="Valencia College Logo" />
            <ul>
              <h2>VALENCIA COLLEGE</h2>
              <h4>2004</h4>
              <h5>AA / Digital Video Production</h5>
            </ul>
          </article>
        </div>
      </section>

      {/* <!-- All Tools Table --> */}
      <section className="tools">
        <h1>TOOLS</h1>
        <br />
        <br />
        <table>
          <tr id="tableheader">
            <th>ECOMM</th>
            <th>DESIGN</th>
            <th>WEB DEV</th>
          </tr>
          <tr>
            <td>Magento 2.0</td>
            <td>Figma</td>
            <td>HTML5/CSS3</td>
          </tr>
          <tr>
            <td>Shopify Plus</td>
            <td>XD</td>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>Wix</td>
            <td>Illustrator</td>
            <td>Node</td>
          </tr>
          <tr>
            <td>Squarespace</td>
            <td>Procreate</td>
            <td>Express</td>
          </tr>
          <tr>
            <td>Wordpress</td>
            <td>Premier Pro</td>
            <td>MongoDB</td>
          </tr>
          <tr>
            <td>Full Circle</td>
            <td>Sketch</td>
            <td>React</td>
          </tr>
        </table>
      </section>
    </div>
  );
}
