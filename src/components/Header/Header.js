// Permet le lien entre les differentes sections ou pages de notre projet
import Link from 'next/link';

import React from 'react';

// Icons react Package
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FiTwitch } from 'react-icons/fi';
import { GiWolfHowl } from 'react-icons/gi';




import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    {/* Title */}
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: 'white', marginBottom: '20px'}}>
          <GiWolfHowl size="3rem" /> <Span style={{ marginLeft: '1rem', fontFamily: 'Audiowide, cursive' }}>Just Auri</Span>
        </a>
      </Link>
    </Div1>
    {/* Navbar */}
    <Div2>
      <li style={{ fontFamily: 'Audiowide, cursive' }}>
        <Link href="#projects">
          <NavLink>Projets</NavLink>
        </Link>
      </li>
      <li style={{ fontFamily: 'Audiowide, cursive' }}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li style={{ fontFamily: 'Audiowide, cursive' }}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/* Réseaux Sociaux */}
    <Div3>
      <SocialIcons href="https://github.com/Auriles">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/auriles-el-haddad/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.twitch.tv/just_auri">
        <FiTwitch size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
