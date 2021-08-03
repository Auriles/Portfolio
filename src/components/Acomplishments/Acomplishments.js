import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 520, text: 'Followers sur Twitch'},
  { number: 1400, text: 'Abonnés sur Youtube', },
  { number: 415, text: 'Followers sur Twitter', },
  { number: 505, text: 'Followers sur Instagram', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle style={{ marginTop: '4rem' }}>Réseaux Sociaux_</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
