import React, { Fragment, FunctionComponent } from 'react';
import styled from 'styled-components';
import { ContentDescription, SectionTitle } from '../../shared/styles';
import Section from '../Section/Section';

export const AboutContainer = styled.div`
  margin: 0 auto;
  width: calc(
    100% - ${props => props.theme.sidesPadding.xs} -
      ${props => props.theme.sidesPadding.xs}
  );

  @media (min-width: 468px) {
    max-width: 80%;
  }

  @media (min-width: 768px) {
    max-width: 75%;
  }
`;

const SkillsTitle = styled(SectionTitle)`
  margin-top: 3rem;
  margin-bottom: 0.75rem;

  @media (min-width: 768px) {
    margin-top: 4rem 4rem 3rem;
    font-size: calc(1vw + 2.5rem);
  }

  @media (min-width: 1024px) {
    margin-top: calc(2vw + 2rem);
    font-size: calc(1.25vw + 2rem);
  }

  @media (min-width: 600px) {
    margin-bottom: 0.25rem;
  }
`;

const PastSkillDesc = styled.p`
  line-height: 1.625;
  color: #d6dde4b5;
  font-size: 0.875rem;
  font-style: italic;

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

const KeyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: calc(1vw + 2rem);
  }
`;

const PastSkillKey = styled.div`
  height: 1.125rem;
  flex: 0 0 1.125rem;
  margin-right: 0.75rem;
  background: #ea9797;
  border-radius: 4px;
`;

const PastExpSkill = styled.div``;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media (min-width: 769px) {
    font-size: calc(1vw + 0.5rem);
  }

  > div {
    color: #d6dde4;
    flex: 1 1 calc(50% - 1rem);
    margin: 0.5rem;
    min-width: 130px;
  }

  > ${PastExpSkill} {
    color: #ea9797;
  }
`;

const About: FunctionComponent = () => (
  <Fragment>
    <Section title="About">
      <AboutContainer>
        <ContentDescription>
          I&apos;m Drew, a software developer with a passion for problem solving
          and elegant UI/UX. Currently I work on an Angular-based component
          library. My previous experiences include working on an application
          that monitors and optimizes the performance of CNC machines and
          working as a teaching assistant/mentor to JavaScript learners. Outside
          of work, I enjoy researching and learning about new, trending
          technologies in the JS community. My current focus is to get
          reacquainted with the backend as I begin working on a full-stack meal
          prep app.
        </ContentDescription>
        <ContentDescription>
          If I&apos;m not working, I&apos;m probably out running, cooking up a
          vegan dinner, cozying up with a good book, or exploring the Raleigh
          community.
        </ContentDescription>
        <SkillsTitle>Skills</SkillsTitle>
        <KeyContainer>
          <PastSkillKey />
          <PastSkillDesc>Learning or have previous experience</PastSkillDesc>
        </KeyContainer>
        <SkillsContainer>
          <div>JavaScript/ES6+</div>
          <div>TypeScript</div>
          <div>HTML</div>
          <div>CSS</div>
          <div>SCSS/LESS</div>
          <div>Angular</div>
          <div>RxJS</div>
          <div>Electron</div>
          <PastExpSkill>NodeJS</PastExpSkill>
          <PastExpSkill>PostgreSQL</PastExpSkill>
          <PastExpSkill>MongoDB</PastExpSkill>
          <PastExpSkill>React</PastExpSkill>
        </SkillsContainer>
      </AboutContainer>
    </Section>
  </Fragment>
);

export default About;
