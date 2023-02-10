import './experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { skillFromLeft, skillFromRight, titleAnimation } from '../../animation/animation';

const Experience = () => {
  const frontendSkills = [
    'HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'NextJS', 'Angular', 'VueJS', 'Vuex', 'Bootstrap',
    'Tailwind',
  ];

  const otherSkills = ['WordPress', 'Clean Code', 'PHP', 'Node JS', 'Git'];

  return (
    <motion.section id="experience" initial="hidden" whileInView="visible" viewport={{ amount: 0.6, once: true }}>
      <motion.h5 variants={titleAnimation}>What Skills I Have</motion.h5>
      <motion.h2 variants={titleAnimation}>My Experience</motion.h2>
      <div className="container experience__container">
        <div className="experience__wrapper">
          <motion.h3 variants={titleAnimation}>Frontend Development</motion.h3>
          <div
            className="experience__content"
          >
            {
              frontendSkills.map((el, id) => (
                <motion.article
                  key={Math.random()}
                  variants={skillFromLeft}
                  className="experience__details"
                >
                  <BsPatchCheckFill className="experience__details_icon" />
                  <h4>{el}</h4>
                </motion.article>
              ))
            }
          </div>
        </div>
        <div className="experience__wrapper">
          <motion.h3 variants={titleAnimation}>Other Skills</motion.h3>
          <div className="experience__content">
            {
              otherSkills.map((el) => (
                <motion.article key={Math.random()} variants={skillFromRight} className="experience__details">
                  <BsPatchCheckFill className="experience__details_icon" />
                  <h4>{el}</h4>
                </motion.article>
              ))
            }
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
