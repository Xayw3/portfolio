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
    },
    {
      link: '#about',
      image: <AiOutlineUser />,
    },
    {
      link: '#experience',
      image: <BiBook />,
    },
    {
      link: '#portfolio',
      image: <RiServiceLine />,
    },
    {
      link: '#contact',
      image: <BiMessageSquareDetail />,
    },
  ];

  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          links.map(({ link, image }) => (
            <li className="nav__item" key={Math.random()}>
              <a
                onClick={() => setActiveLink(link)}
                className={activeLink === link ? 'nav__link active' : 'nav__link'}
                href={link}
              >
                {image}
              </a>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
