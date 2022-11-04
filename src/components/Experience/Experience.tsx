import './experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  const frontendSkills = [
    'HTML', 'CSS/SCSS', 'JavaScript', 'TypeScript', 'React', 'Redux', 'NextJS', 'Angular', 'VueJS', 'Vuex', 'Bootstrap',
    'Tailwind',
  ];

  const otherSkills = ['WordPress', 'Clean Code', 'PHP', 'Node JS', 'Git'];

  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__wrapper">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {
              frontendSkills.map((el) => (
                <article key={Math.random()} className="experience__details">
                  <BsPatchCheckFill className="experience__details_icon" />
                  <h4>{el}</h4>
                </article>
              ))
            }
          </div>
        </div>
        <div className="experience__wrapper">
          <h3>Other Skills</h3>
          <div className="experience__content">
            {
              otherSkills.map((el) => (
                <article key={Math.random()} className="experience__details">
                  <BsPatchCheckFill className="experience__details_icon" />
                  <h4>{el}</h4>
                </article>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
