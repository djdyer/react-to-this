import React from "react";

export default function Work() {
  const github = require("../../assets/images/social-icons/github_icon.png");
  const githubHover = require("../../assets/images/social-icons/github_hover.png");

  return (
    <div className="work-grid">
      <article className="work1">
        <div className="label">
          <a
            href="https://github.com/djdyer/fly-app"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="http://flyapp.world/"
            target="_blank"
            rel="noreferrer"
            alt="Progress Edit"
          >
            <h3>FLY APP</h3>
          </a>
        </div>
      </article>

      <article className="work2">
        <div className="label">
          <a
            href="https://www.github.com/djdyer/materials-trader"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="https://materials-trader.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            alt="Materials Trader"
          >
            <h3>MATERIALS TRADER</h3>
          </a>
        </div>
      </article>

      <article className="work3">
        <div className="label">
          <a
            href="https://www.github.com/djdyer/the-tech-bros-blog"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="https://the-tech-bros-blog.herokuapp.com"
            target="_blank"
            rel="noreferrer"
            alt="The Tech Bros Blog"
          >
            <h3>TECH BROS BLOG</h3>
          </a>
        </div>
      </article>

      <article className="work4">
        <div className="label">
          <a
            href="https://www.github.com/djdyer/pokego-weather-companion"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="http://djdyer.github.io/pokego-weather-companion"
            target="_blank"
            rel="noreferrer"
            alt="PokeGo Weather Companion"
          >
            <h3>POKEGO</h3>
          </a>
        </div>
      </article>

      <article className="work5">
        <div className="label">
          <a
            href="https://www.github.com/djdyer/rain-or-shine"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="http://djdyer.github.io/rain-or-shine"
            target="_blank"
            rel="noreferrer"
            alt="Rain or Shine"
          >
            <h3>RAIN OR SHINE</h3>
          </a>
        </div>
      </article>

      <article className="work6">
        <div className="label">
          <a
            href="https://www.github.com/djdyer/code-quiz"
            target="_blank"
            rel="noreferrer"
          >
            <img alt="Git Hub Icon" className="git_link default" src={github} />
            <img
              alt="Git Hub Icon Hover"
              className="git_link hover"
              src={githubHover}
            />
          </a>
          <a
            href="http://djdyer.github.io/code-quiz"
            target="_blank"
            rel="noreferrer"
            alt="Code Quiz"
          >
            <h3>CODE QUIZ</h3>
          </a>
        </div>
      </article>
    </div>
  );
}
