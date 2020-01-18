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

const About = () => (
  <Fragment>
    <CTAHeaderText id="about">
      <AboutText>About</AboutText>
    </CTAHeaderText>
    <AboutDiv>
      <HalfImage imgSrc="images/about.jpg">
        <Fragment>
          <AboutTitle>About Me</AboutTitle>
          <ContentDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            maximus egestas sagittis. Integer tellus arcu, malesuada quis
            hendrerit eu, condimentum sed diam. Integer in semper nisl, in
            pretium risus. Mauris eget sapien euismod, convallis enim vel,
            condimentum tortor. Cras eros neque, imperdiet in magna non,
            suscipit cursus enim. Cras placerat lorem vel dignissim maximus.
            Quisque eget velit vel leo egestas egestas. Aenean blandit bibendum
            mi, ut sagittis orci tempor et. Phasellus ut porta purus. Cras odio
            libero, efficitur eu hendrerit sed, ullamcorper vel est. Morbi
            mollis, eros pellentesque luctus cursus, mauris dui egestas dolor,
            nec egestas est augue vel urna. In nec orci hendrerit, maximus nulla
            eget, malesuada enim. Praesent fringilla elit nec lacus pulvinar
            condimentum. Sed vel arcu ac purus pharetra laoreet vitae sit amet
            turpis. Pellentesque semper fringilla sapien ut consequat.
          </ContentDescription>
        </Fragment>
      </HalfImage>
    </AboutDiv>
  </Fragment>
);

export default About;
