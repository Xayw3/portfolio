import './portfolio.scss';
import portfolioReact from './portfolioData';

const Portfolio = () => {
  const data = portfolioReact;

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({
            image, title, githubLink, appLink, id,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="f" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__btns">
                <a className="btn" href={githubLink} target="_blank" rel="noreferrer">Github</a>
                <a className="btn btn-primary" target="_blank" href={appLink} rel="noreferrer">Live App</a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
