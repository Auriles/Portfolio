import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur le site<br />
        de Just Auri
      </SectionTitle>
      <SectionText>
        Hello ! Je m'appelle Auriles El Haddad, j'ai 26 ans et suis fraîchement sorti d'école ! <br />
        En possession d'un double diplôme, l'un en informatique et l'autre en marketing/communication, je suis désormais à la recherche d'opportunités professionnelles afin de développer davantage mes compétences techniques et les mettre à votre disposition !
      </SectionText>
      <Button onClick={() => window.location = '#projects'}>En savoir plus</Button>
    </LeftSection>
  </Section>
);

export default Hero;