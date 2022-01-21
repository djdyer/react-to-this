import React from "react";

export default function Work() {
  return (
    <div>
      <section>
        <div class="header-realign">
          <h2 id="work">WORK</h2>
        </div>

        {/* <!-- Featured Work --> */}

        <article class="work1">
          <div class="label">
            <a
              href="https://www.github.com/djdyer/materials-trader"
              target="_blank"
            >
              <img
                class="git_link default"
                src="Images/Custom_Social_Icons_github_blue.png"
              />
              <img class="git_link hover" src="Images/github_hover.png" />
            </a>
            <a
              href="https://materials-trader.herokuapp.com"
              target="_blank"
              alt="Materials Trader"
            >
              <h3>MATERIALS TRADER</h3>
            </a>
          </div>
        </article>

        {/* <!-- Four additional works --> */}
        <div id="nowrapgrid">
          <article class="work2">
            <div class="label">
              <a
                href="https://www.github.com/djdyer/the-tech-bros-blog"
                target="_blank"
              >
                <img
                  class="git_link default"
                  src="Images/Custom_Social_Icons_github_blue.png"
                />
                <img class="git_link hover" src="Images/github_hover.png" />
              </a>
              <a
                href="https://the-tech-bros-blog.herokuapp.com"
                target="_blank"
                alt="The Tech Bros Blog"
              >
                <h3>TECH BROS BLOG</h3>
              </a>
            </div>
          </article>

          <article class="work3">
            <div class="label">
              <a
                href="https://www.github.com/djdyer/pokego-weather-companion"
                target="_blank"
              >
                <img
                  class="git_link default"
                  src="Images/Custom_Social_Icons_github_blue.png"
                />
                <img class="git_link hover" src="Images/github_hover.png" />
              </a>
              <a
                href="http://djdyer.github.io/pokego-weather-companion"
                target="_blank"
                alt="PokeGo Weather Companion"
              >
                <h3>POKEGO</h3>
              </a>
            </div>
          </article>

          <article class="work4">
            <div class="label">
              <a
                href="https://www.github.com/djdyer/rain-or-shine"
                target="_blank"
              >
                <img
                  class="git_link default"
                  src="Images/Custom_Social_Icons_github_blue.png"
                />
                <img class="git_link hover" src="Images/github_hover.png" />
              </a>
              <a
                href="http://djdyer.github.io/rain-or-shine"
                target="_blank"
                alt="Rain or Shine"
              >
                <h3>RAIN OR SHINE</h3>
              </a>
            </div>
          </article>

          <article class="work5">
            <div class="label">
              <a href="https://www.github.com/djdyer/code-quiz" target="_blank">
                <img
                  class="git_link default"
                  src="Images/Custom_Social_Icons_github_blue.png"
                />
                <img class="git_link hover" src="Images/github_hover.png" />
              </a>
              <a
                href="http://djdyer.github.io/code-quiz"
                target="_blank"
                alt="Code Quiz"
              >
                <h3>CODE QUIZ</h3>
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
