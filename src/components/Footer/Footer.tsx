import './footer.scss';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const links = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Experience',
      link: '#experience',
    },
    {
      title: 'Portfolio',
      link: '#portfolio',
    },
    {
      title: 'Contacts',
      link: '#contact',
    },
  ];

  const socials = [
    {
      link: 'https://www.facebook.com/E.Kapilinskis',
      icon: <FaFacebook />,
    },
    {
      link: 'https://www.linkedin.com/in/edgars-kapilinskis/',
      icon: <FaLinkedin />,
    },
    {
      link: 'https://github.com/Xayw3',
      icon: <FaGithub />,
    },
  ];

  const logoLink = '#';

  return (
    <footer className="footer">
      <a className="footer__logo" href={logoLink}>Edgars Kapilinskis</a>
      <ul className="footer-list">
        {
          links.map(({ title, link }) => (
            <li key={Math.random()}>
              <a href={link}>{title}</a>
            </li>
          ))
        }
      </ul>
      <ul className="footer-socials">
        {
          socials.map(({ link, icon }) => (
            <li key={Math.random()}>
              <a className="footer-socials__link" href={link}>{icon}</a>
            </li>
          ))
        }
      </ul>
    </footer>
  );
};

export default Footer;
