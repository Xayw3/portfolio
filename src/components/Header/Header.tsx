/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/no-unescaped-entities */
import { motion } from 'framer-motion';
import HeaderButtons from './HeaderButton';
import './header.scss';
import ME from '../../assets/images/me.webp';
import HeaderSocials from './HeaderSocials';
import { heroImageAnimation, letterAnimation, socialsAnimation } from '../../animation/animation';

const Header = () => {
  const heroTitle = "Hello I'm Edgars Kapilinskis Frontend Developer".split('');

  return (
    <motion.header initial="initial" animate="animate">
      <motion.div className="container header__container">
        <div className="header__content">
          <div className="header__content-right">
            <motion.h1 className="header__title">
              {
                heroTitle.map((el, id) => (
                  <motion.span className="letter" custom={id} variants={letterAnimation}>{el}</motion.span>
                ))
              }
            </motion.h1>
            <HeaderButtons />
          </div>
          <motion.div className="header__content-left" variants={heroImageAnimation}>
            <div className="header__me">
              <div className="header__me-image">
                <img src={ME} alt="me" />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="scroll">
          <a href="#about" className="scroll-down">Scroll Down</a>
        </div>
        <HeaderSocials />
      </motion.div>
    </motion.header>
  );
};

export default Header;
