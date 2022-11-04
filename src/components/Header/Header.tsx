/* eslint-disable react/no-unescaped-entities */
import HeaderButtons from './HeaderButton';
import './header.scss';
import ME from '../../assets/images/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  console.log();

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Edgars Kapilinskis</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderButtons />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
