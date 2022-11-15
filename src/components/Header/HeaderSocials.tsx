import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { socialsAnimation } from '../../animation/animation';

const HeaderSocials = () => {
  console.log();

  return (
    <motion.div className="header__socials" initial="initial" animate="animate">
      <motion.a variants={socialsAnimation} custom={1} href="https://linkedin.com" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </motion.a>
      <motion.a variants={socialsAnimation} custom={2} href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </motion.a>
    </motion.div>
  );
};

export default HeaderSocials;
