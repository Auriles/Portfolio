import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    {/* <br /><br /><br /> */}
    <SectionTitle style={{marginTop: '6rem'}}>Technologies_</SectionTitle>
    <SectionText>
      Je travaille avec de nombreuses technologies dans le domaine du développement web, du Back-End au Design.
    </SectionText>
    <List>
      {/* Front-End */}
      <ListItem>
        <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              HTML 5 / CSS 3 / Javascript <br />
              React.js
            </ListParagraph>
          </ListContainer>
      </ListItem>
      {/* Back-End */}
      <ListItem>
        <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              SQL / MongoDB / GraphQL <br />
              Node.js
            </ListParagraph>
          </ListContainer>
      </ListItem>
      {/* UX/UI*/}
      <ListItem>
        <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Figma / Adobe XD / Photoshop <br />
              Premiere Pro
            </ListParagraph>
          </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
