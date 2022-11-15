import './navbar.scss';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('#');

  const links = [
    {
      link: '#',
      image: <AiOutlineHome />,
      text: 'Home',
    },
    {
      link: '#about',
      image: <AiOutlineUser />,
      text: 'About',
    },
    {
      link: '#experience',
      image: <BiBook />,
      text: 'Experience',
    },
    {
      link: '#portfolio',
      image: <RiServiceLine />,
      text: 'Portfolio',
    },
    {
      link: '#contact',
      image: <BiMessageSquareDetail />,
      text: 'Contact',
    },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          links.map(({ link, image, text }) => (
            <li className={activeLink === link ? 'nav__item active' : 'nav__item'} key={Math.random()}>
              <a
                onClick={() => setActiveLink(link)}
                className={activeLink === link ? 'nav__link active' : 'nav__link'}
                href={link}
              >
                <span className="nav__icon">
                  {image}
                </span>
                <span className="nav__text">{text}</span>
              </a>
            </li>
          ))
        }
        <div className="indicator" />
      </ul>
    </nav>
  );
};

export default NavBar;
