/* eslint-disable react/no-unescaped-entities */
import './about.scss';
import { motion } from 'framer-motion';
import { FaMobileAlt } from 'react-icons/fa';
import { RiComputerFill } from 'react-icons/ri';
import { IoSpeedometerOutline } from 'react-icons/io5';
import { aboutCardAnimation, titleAnimation } from '../../animation/animation';

const About = () => {
  const aboutCard = [
    {
      title: 'Experience',
      text: 'Developing blazing fast web pages for seamless user interaction',
      image: <IoSpeedometerOutline className="about__icon" />,
    },
    {
      title: 'Clients',
      text: 'Mobile-last responsive design layout for all devices is a top priority',
      image: <FaMobileAlt className="about__icon" />,
    },
    {
      title: 'Projects',
      text: 'Constantly continuing to learn new tehnologies and keeping up-to-date with the freshest trends',
      image: <RiComputerFill className="about__icon" />,
    },
  ];

  return (
    <motion.section
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1.0 }}
      id="about"
    >
      <motion.h5 variants={titleAnimation}>Get To Know</motion.h5>
      <motion.h2 className="about__title" variants={titleAnimation}>About Me</motion.h2>
      <motion.p className="about__content-text" variants={titleAnimation}>
        Passionate front-end developer, skilled in JavaScript, TypeScript, HTML, CSS, React, Angular and VueJs.
        Constantly improve my programming skills.
      </motion.p>
      <div className="container about__container">
        <div className="about__cards">
          {
              aboutCard.map(({ title, text, image }, id) => (
                <motion.div variants={aboutCardAnimation} custom={id} key={Math.random()} className="about__card">
                  <span />
                  <article className="about__card-content">
                    {image}
                    <small>{text}</small>
                  </article>
                </motion.div>
              ))
            }
        </div>
        <motion.a href="#contact" className="btn btn-primary about__btn" variants={titleAnimation}>Let's Talk</motion.a>
      </div>
    </motion.section>
  );
};

export default About;
