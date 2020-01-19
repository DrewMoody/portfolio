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

const ContactDescription = styled(ContentDescription)`
  margin-bottom: 1rem;
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
          <ContactDescription>
            Whether you&apos;re looking to collaborate on a project, or you have
            an idea for an app that&apos;s "like [facebook, twitter, instagram]
            but for [noun]," I&apos;d love to hear from you! Just drop me a line
            using the form below.
          </ContactDescription>
          <ContactForm />
        </Fragment>
      </HalfImage>
    </ContactDiv>
  </Fragment>
);

export default Contact;
