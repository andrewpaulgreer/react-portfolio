import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <section id="home">
        <div className="overlay">
          <nav role="navigation">
            <ul className="columns has-text-centered">
              <li className="column link">
                <a href="#aboutMe">About me</a>
              </li>
              <li className="column link">
                <a href="#portfolio">Portfolio</a>
              </li>
            </ul>
                <h1 className="title is-size-1 is-size-1-mobile has-text-centered has-text-left-mobile page-name">
                  Andrew Greer</h1>
                <h1 className="title is-size-1 is-size-1-mobile has-text-centered has-text-left-mobile page-skill">
                  Web developer</h1>   
          </nav>
        </div>
      </section>
      <main className="section">
        <div className="container">
          <section className="columns">
            <div className="column is-one-quarter">
              <figure className="image">
                <img
                  className="is-rounded"
                  src="/media/andrewgreer.jpeg"
                  alt="profile-pic"
                />
              </figure>
              <div className="content contact-info contact-info">
                <p className="email">
                  <i className="fas fa-envelope-open-text"></i>
                  <a
                    href="mailto: andrewgreer2015@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    andrewgreer2015@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div id="aboutMe" className="is-three-quarters about-me">
              <h4 className="title is-3">A little bit about me:</h4>
              <p className="content is-medium">
                Hi! My name is Andrew Greer, and I am a student for fullstack
                Web Development. I am a fullstack Web Developer, specializing in
                the MERN stack.
              </p>
              <p className="content is-medium">
                I became interested in the software engineering after my past
                experience in technology. My interest initially came from the
                web developer that works for the tech startup company that I
                worked for in College. I am most interested in React, and would
                love to find a role that is heavily React dependant.
              </p>
              <h3 className="content is-medium">
                Skills:
              </h3>
              <p className="content is-medium">
              Front-end: HTML 5, CSS3, Javascript, React jQuery, Ajax, consuming RESTful API’s, handlebars.js, Bootstrap, Bulma.
              </p>
              <p className="content is-medium">
              Backend: Node.js, MySQL, Mongodb, MySQL Server, express, sequelize ORM, passport.js.
              </p>
              <nav className="level">
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="https://github.com/andrewpaulgreer"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-info is-outlined is-rounded">
                        <i className="fab fa-github"></i> GitHub
                      </button>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/andrewpgreer"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-info is-outlined is-rounded">
                        <i className="fab fa-linkedin-in"></i> LinkedIn
                      </button>
                    </a>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <a
                      href="/resume/Andrew-dev-resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="resume"
                    >
                      <button className="heading button is-large is-info is-outlined is-rounded">
                        <i className="far fa-file"></i> Resume
                      </button>
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </div>
      </main>

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
    </>
  );
}

export default App;
