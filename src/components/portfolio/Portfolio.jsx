import React from 'react';
import "./portfolio.css";
import IMGI from '../../assets/portfolio1.jpeg'
import IMGI1 from '../../assets/images.jpeg'
import IMGI2 from '../../assets/portfolio2.jpeg'
import IMGI3 from '../../assets/portfolio3.jpeg'
import IMGI4 from '../../assets/portfolio4.jpeg'
import IMGI5 from "../../assets/portfolio6.jpeg";


const Portfolio = () => {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Porfolio</h2>

        <div className="container portfolio__container">
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI} alt="porfolio" />
              <h3>PROJECT-1</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI1} alt="porfolio" />
              <h3>PROJECT-2</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI2} alt="porfolio" />
              <h3>PROJECT-3</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI3} alt="porfolio" />
              <h3>PROJECT-4</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI4} alt="porfolio" />
              <h3>PROJECT-5</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
          <article className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMGI5} alt="porfolio" />
              <h3>PROJECT-6</h3>
              <div className=".portfolio__item-cta">
                <a href="https://github.com" className="btn">
                  Github
                </a>
                <a
                  href="https://dribble.com/Alien_pixels"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    );
}
export default Portfolio