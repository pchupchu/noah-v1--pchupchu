'use client';

import { Link } from 'react-scroll';

const links = [
  { name: 'home' },
  { name: 'about' },
  { name: 'journey' },
  { name: 'work' },
  { name: 'contact' },
];

interface NavProps {
  containerStyle?: string;
  listStyle?: string;
  linkStyle?: string;
  spy?: boolean;
}

const Nav = ({ containerStyle, listStyle, linkStyle, spy }: NavProps) => {
  return (
    <nav className={containerStyle}>
      <ul className={listStyle}>
        {links.map((link, index) => (
          <Link
            className={linkStyle}
            key={index}
            to={link.name}
            spy={spy}
            activeClass='active'
            smooth>
            {link.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
