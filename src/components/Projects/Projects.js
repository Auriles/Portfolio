import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projets Personnels_</SectionTitle>
    <SectionText>
      Voici quelques projets personnels que j'ai pu réaliser dans le cadre du développement web !
    </SectionText>
    {/* Permet de faire un mapping depuis le fichier constants qui référence tous nos projets */}
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, visit }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent> <br />
            <HeaderThree>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo style={{textAlign: 'center'}}>{description}</CardInfo>
          <div>
            <br />
            <TitleContent style={{fontFamily: 'Audiowide, cursive'}}>Stack</TitleContent>
            {/* Permet de montrer les technologies utilisées pour chaque projet */}
            <TagList>
              {tags.map((tag, i) => (
                <Tag style={{ fontFamily: 'Audiowide, cursive' }} key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          {/*    */}
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Site</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;