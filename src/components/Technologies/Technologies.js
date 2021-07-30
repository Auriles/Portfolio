import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technilogies in the web development world. From Back-End to Design.
    </SectionText>
    <List>
      {/* Front-End */}
      <ListItem>
        <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js
            </ListParagraph>
          </ListContainer>
      </ListItem>
      {/* Back-End */}
      <ListItem>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br />
              Node.js and Databases
            </ListParagraph>
          </ListContainer>
      </ListItem>
      {/* -End */}
      <ListItem>
        <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br />
              Tools like Figma or AdobeXD
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
