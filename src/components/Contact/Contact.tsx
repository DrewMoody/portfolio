import React, { Fragment } from "react";
import styled from "styled-components";
import { circuitSvg } from "../../shared/circuit";
import {
  ContactText,
  ContentDescription,
  CTAHeaderText,
  SectionTitle
} from "../../shared/styles";
import HalfImage from "../HalfImage/HalfImage";
import ContactForm from "./ContactForm";

const ContactDiv = styled.div`
  background: ${props => props.theme.dark.dark1};
  display: flex;
  justify-content: center;
  ${circuitSvg.replace("%23f08ebe", "%23ee943e")}

  > div {
    flex-direction: row-reverse;
  }
`;

const ContactTitle = styled(SectionTitle)`
  color: #f1a36c;
`;

const Contact = (): JSX.Element => (
  <Fragment>
    <CTAHeaderText id="contact">
      <ContactText>Contact</ContactText>
    </CTAHeaderText>
    <ContactDiv>
      <HalfImage imgSrc="images/contact.jpg">
        <Fragment>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContentDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            maximus egestas sagittis. Integer tellus arcu, malesuada quis
            hendrerit eu, condimentum sed diam. Integer in semper nisl, in
            pretium risus. Mauris eget sapien euismod, convallis enim vel,
            condimentum tortor.
          </ContentDescription>
          <ContactForm />
        </Fragment>
      </HalfImage>
    </ContactDiv>
  </Fragment>
);

export default Contact;
