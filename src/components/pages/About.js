import React from "react";

export default function About() {
  let headshot = require("../../assets/resume/casual_headshot.jpg");
  return (
    <div>
      <section className="flexprofile">
        <img id="headshot" src={headshot} alt="Headshot" />
        <div>
          <p>
            My name is David Dyer, I am an artist, skateboarder, music label
            co-founder, and eCommerce professional, making strides toward a
            career in UX Design and frontend web development. Born in Baton
            Rouge, Louisiana, our family moved to Central Florida where I got
            heavy into digital video production and DJ'ing. Eventually, my
            friends and I launched a record label dubbed Prestige Music Group,
            still running today. In '07, I graduated from the University of
            Central Florida with a BA in Entrepreneurship. It was not long after
            graduation that I relocated myself to sunny Los Angeles CA.
            <span className="dots">...</span>
            <br />
            <br />
            <span className="fullBio">
              In early '09, I gained an entry-level position with famed LA
              apparel brand, The Hundreds. Within one year, I was promoted to
              eCommerce Sales Manager. As the years went on, the collections and
              warehouse teams grew in size, as did the responsibilities merging
              into digital marketing, merchandising, logistics, 3PL, the list
              goes on. After years of building trust with executives, I was able
              to position myself into a vital part of our web development team.
              My input was largely considered with respect to building out
              functionality for multiple website redesigns and platform
              migrations. I believe this experience planted the seed that later
              grew into aspirations for a career in UX Design.
              <br />
              <br />
              In 2018 I ventured up to the Bay Area, landing in Oakland. There,
              I joined up with community apparel brand Oaklandish as Operations
              Specialist, working to establish and manage multiple sub-label web
              shops, integrated sales channels, and help facilitate the start of
              their partnership with the Oakland Roots Soccer Club. Soon I
              decided to further my education by earning certification as a UX
              Designer from UCBerkeley.
              <br />
              <br />
              Enter COVID. I have relocated once again, now residing just
              outside of Atlanta GA. Lately, you can find me offering freelance
              design services while enrolled at GA Tech coding bootcamp for the
              fall term, putting all the pieces together. Reach out, get in
              touch, and let's start a project together!
            </span>
          </p>
          <button className="readMore">Read more</button>
        </div>
      </section>
    </div>
  );
}
