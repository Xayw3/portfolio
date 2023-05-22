import './portfolio.scss';
import { motion } from 'framer-motion';
import portfolioReact from './portfolioData';
import { projectAnimation, titleAnimation } from '../../animation/animation';

const Portfolio = () => {
  const data = portfolioReact;

  return (
    <motion.section id="portfolio" initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }}>
      <motion.h5 variants={titleAnimation}>My Recent Work</motion.h5>
      <motion.h2 variants={titleAnimation}>Portfolio</motion.h2>
      <div className="container portfolio__container">
        {
          data.map(({
            image, title, githubLink, appLink, id,
          }) => (
            <motion.article key={id} className="portfolio__item" variants={projectAnimation}>
              <div className="portfolio__item-image">
                <img src={image} alt="f" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__btns">
                <div className="portfolio__btn">
                  <a href={githubLink} target="_blank" rel="noreferrer">Github</a>
                </div>
                <div className="portfolio__btn">
                  <a target="_blank" href={appLink} rel="noreferrer">Live App</a>
                </div>
              </div>
            </motion.article>
          ))
        }
      </div>
    </motion.section>
  );
};

export default Portfolio;
