import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ClientProjectsStyles';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { clientProjects } from '../../constants/constants';

const ClientProjects = () => (
    <Section nopadding id="Projects">
        <SectionDivider />
        <SectionTitle main>Projets Clients_</SectionTitle>
        <SectionText>
            Ils m'ont fait confiance pour la réalisation de leurs projets !
        </SectionText>
        {/* Permet de faire un mapping depuis le fichier constants qui référence tous nos projets */}
        <GridContainer>
            {clientProjects.map(({ id, image, title, description, tags, source, visit }) => (
                <BlogCard key={id}>
                    <Img src={image} />
                    <TitleContent> <br />
                        <HeaderThree>{title}</HeaderThree>
                        <Hr />
                    </TitleContent>
                    <TitleContent style={{ fontFamily: 'Audiowide, cursive' }}>Description</TitleContent> <br />
                    <CardInfo style={{ textAlign: 'left' }}>{description}</CardInfo>
                    <div>
                        <br />
                        <TitleContent style={{ fontFamily: 'Audiowide, cursive' }}>Stack</TitleContent>
                        {/* Permet de montrer les technologies utilisées pour chaque projet */}
                        <TagList>
                            {tags.map((tag, i) => (
                                <Tag style={{ fontFamily: 'Audiowide, cursive' }} key={i}>{tag}</Tag>
                            ))}
                        </TagList>
                    </div>
                    {/*    */}
                    <UtilityList>
                        {/* <ExternalLinks href={visit}>Code</ExternalLinks> */}
                        <ExternalLinks href={source}>Site</ExternalLinks>
                    </UtilityList>
                </BlogCard>
            ))}
        </GridContainer>
    </Section>
);

export default ClientProjects;