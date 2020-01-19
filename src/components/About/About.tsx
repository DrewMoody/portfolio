import React, { Fragment } from "react";
import styled from "styled-components";
import { circuitSvg } from "../../shared/circuit";
import {
  AboutText,
  ContentDescription,
  CTAHeaderText,
  SectionTitle
} from "../../shared/styles";
import HalfImage from "../HalfImage/HalfImage";

const AboutDiv = styled.div`
  background: ${props => props.theme.dark.dark1};
  display: flex;
  justify-content: center;
  ${circuitSvg.replace("%23f08ebe", "%239accc0")}
`;

const AboutTitle = styled(SectionTitle)`
  color: #9accc0;
`;

const SkillsTitle = styled(AboutTitle)`
  margin-bottom: 0.25rem;
`;

const PastSkillDesc = styled.p`
  line-height: 1.625;
  color: #d6dde4b5;
  font-size: 1rem;
  font-style: italic;
`;

const KeyContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 0.75rem;
  margin-bottom: 1.5rem;
`;

const PastSkillKey = styled.div`
  height: 1.125rem;
  width: 1.125rem;
  margin-right: 0.5rem;
  background: #ea9797;
  border-radius: 4px;
`;

const PastExpSkill = styled.div``;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    color: #d6dde4;
    flex: 1 1 calc(50% - 1rem);
    margin: 0.5rem;
    min-width: 160px;
  }

  > ${PastExpSkill} {
    color: #ea9797;
  }
`;

const About = () => (
  <Fragment>
    <CTAHeaderText id="about">
      <AboutText>About</AboutText>
    </CTAHeaderText>
    <AboutDiv>
      <HalfImage imgSrc="images/about.jpg">
        <Fragment>
          <AboutTitle>About</AboutTitle>
          <ContentDescription>
            I&apos;m Drew, a software developer with a passion for problem
            solving and elegant UI/UX. By day, I work as a professional Angular
            developer on a project for monitoring and optimizing the performance
            of CNC machines. By night, I love to research and learn about new,
            trending technologies in the JS community. Currently, after spending
            a year focused on frontend development, I&apos;m working to get
            reacquainted with the backend as I begin working on a new full-stack
            app.
          </ContentDescription>
          <ContentDescription>
            When I&apos;m not working, you can find me cooking up a
            keto-friendly meal, cozying up with a good book, or tending to my
            houseplants.
          </ContentDescription>
          <SkillsTitle>Skills</SkillsTitle>
          <KeyContainer>
            <PastSkillKey />
            <PastSkillDesc>
              Something I'm learning or have previous experience with
            </PastSkillDesc>
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
        </Fragment>
      </HalfImage>
    </AboutDiv>
  </Fragment>
);

export default About;
