import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Bienvenue sur <br /> Just Auri Agency
      </SectionTitle>
      <SectionText>
        Hello ! Je m'appelle Auriles El Haddad, j'ai 26 ans et suis passionné par le code ! <br />
        {/* En possession d'un double Master, l'un en informatique et l'autre en marketing/communication, je suis désormais à la recherche d'opportunités professionnelles afin de développer davantage mes compétences techniques et les mettre à votre disposition ! */}
        Etant micro-entrepreneur, ce site me permet de vous partager à la fois ma passion, mais également les différents travaux que j'ai réalisé à titre personnel ou professionnel !
      </SectionText>
      <Button onClick={() => window.location = '/CV_Auriles_ELHADDAD_Chef_De_Projet.pdf'}>Voir mon CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;