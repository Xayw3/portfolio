/* eslint-disable react/no-unescaped-entities */
import './about.scss';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/images/me.jpg';

const About = () => {
  const aboutCard = [
    {
      title: 'Experience',
      text: '1+ Years',
      image: <FaAward className="about__icon" />,
    },
    {
      title: 'Clients',
      text: '10+ Worldwide',
      image: <FiUsers className="about__icon" />,
    },
    {
      title: 'Projects',
      text: '10+ Completed Projects',
      image: <VscFolderLibrary className="about__icon" />,
    },
  ];

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            {
              aboutCard.map(({ title, text, image }) => (
                <article key={Math.random()} className="about__card">
                  {image}
                  <h5>{title}</h5>
                  <small>{text}</small>
                </article>
              ))
            }
          </div>
          <p className="about__content-text">
            Passionate front-end developer, skilled in JavaScript, TypeScript, HTML, CSS, React, Angular and VueJs.
            Constantly improve my programming skills.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
