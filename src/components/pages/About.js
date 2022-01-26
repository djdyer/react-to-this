import React from "react";
import helper from "../utils/bio-helper";

export default function About() {
  const headshot = require("../../assets/resume/casual_headshot.jpg");

  return (
    <div>
      <section className="flexprofile">
        <img id="headshot" src={headshot} alt="Headshot" />
        <div>
          <p className="bio">
            My name is David Dyer, I am an artist, skateboarder, music label
            co-founder, and eCommerce professional, making strides toward a
            career in UX Design and frontend Web Dev. Born in Baton Rouge,
            Louisiana, our family moved to Central Florida where I got heavy
            into digital video production and DJ'ing. Eventually, my friends and
            I launched a record label dubbed Prestige Music Group, still running
            today. In '07, I graduated from the University of Central Florida
            with a BA in Entrepreneurship. It was not long after graduation that
            I relocated to sunny Los Angeles CA.
            <span className="dots">...</span>
            <br />
            <br />
            <span className="fullBio">
              In early '09, I joined up with famed LA apparel brand, The
              Hundreds as eCommerce Sales Manager. As the collections and
              warehouse teams grew in size, as did the responsibilities merging
              into digital marketing, merchandising, logistics, 3PL, the list
              goes on. After years of building trust with executives, I was able
              to position myself into a vital part of our web dev team. My input
              was largely considered with respect to building out functionality
              for multiple website redesigns and platform migrations. It was
              this experience that planted a seed that later grew into
              aspirations for a career in UX Design.
              <br />
              <br />
              In 2018 I ventured up to the Bay Area, landing in Oakland. There,
              I joined up with community apparel brand Oaklandish as Operations
              Specialist, working to establish and manage multiple sub-label web
              shops, integrated sales channels, and help facilitate the start of
              their partnership with the Oakland Roots Soccer Club. Soon I
              decided to further my education by earning certification as a UX
              Designer from UCBerkeley, eventually taking part in the Global
              Internship Program for summer 2021.
              <br />
              <br />
              Enter COVID. I have relocated once again, now residing just
              outside of Atlanta GA. Lately, you can find me offering freelance
              design services while enrolled at GA Tech coding bootcamp for the
              fall term, putting all the pieces together. Reach out, get in
              touch, and let's build something cool!
            </span>
            <button className="readMore" onClick={helper}>
              Read more
            </button>
          </p>
        </div>
      </section>
    </div>
  );
}
