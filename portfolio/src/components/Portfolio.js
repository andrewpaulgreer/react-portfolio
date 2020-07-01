import React from "react";

function Portfolio (){
    const styles= {
        underline: {
          textDecoration: "none"
        }
      }
    return(
        <main className="section" id="portfolio">
        <div className="container">
          <div className="notification portfolio-background">
            <p className="title has-text-centered has text-white">Portfolio</p>
            <hr />
            <section className="title columns">
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">
                    Groovy Concert Search
                  </p>
                  <a
                    href="https://andrewpaulgreer.github.io/Project1/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/Project-1-demo_ May 20, 2020 4_32 PM.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/Project1"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                       Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">ShopByYou</p>
                  <a
                    href="https://shopbyyou.herokuapp.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/ShopByYou Demo.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>

                  <p className="repo-link">
                    <a
                      href="https://github.com/JRivera-31/ShopByYou"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
            <section className="title columns">
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">Code Quiz</p>
                  <a
                    href="https://andrewpaulgreer.github.io/code-quiz/index.html"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/quiz-demo_ May 20, 2020 5_06 PM.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/code-quiz"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">ShopByYou</p>
                  <a
                    href="https://andrewpaulgreer.github.io/jQuery-Day-Planner/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/Day-planner-demo_ May 20, 2020 5_14 PM.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>

                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/jQuery-Day-Planner"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
            <section className="title columns">
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">Code Quiz</p>
                  <a
                    href="https://shielded-anchorage-70351.herokuapp.com/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/Burger-Demo.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>
                  <p className="repo-link">
                    <a
                      href="https://github.com/andrewpaulgreer/burger-handlebars"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
              <div className="title column">
                <article className="title is-child box">
                  <p className="title is-4 has-text-centered">ShopByYou</p>
                  <a
                    href="https://andrewpaulgreer.github.io/weather-dashboard/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="media/Weather-Dashboard-Demo_ May 20, 2020 4_42 PM.gif"
                      className="portfolio-image"
                      alt="placeholder"
                    />
                  </a>

                  <p className="repo-link">
                    <a
                      href="github.com/andrewpaulgreer/weather-dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.underline}
                    >
                      <button type="button" className="button rounded">
                        Click here for Repository
                      </button>
                    </a>
                  </p>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>

    )
}

export default Portfolio