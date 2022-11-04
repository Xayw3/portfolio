/* eslint-disable react/no-unescaped-entities */
import CV from '../../assets/images/Edgars_Kapilinskis_CV.pdf';

const HeaderButtons = () => {
  console.log();

  return (
    <div className="cta">
      <a className="btn" href={CV} download>Download CV</a>
      <a className="btn btn-primary" href="#contact">Let's Talk</a>
    </div>
  );
};

export default HeaderButtons;
