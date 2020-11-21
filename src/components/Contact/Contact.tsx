import React, { Fragment } from 'react';
import styled from 'styled-components';
import { ContentDescription, SectionTitle } from '../../shared/styles';
import { AboutContainer } from '../About/About';
import Section from '../Section/Section';
import ContactForm from './ContactForm';

const ContactWrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 0)),
    linear-gradient(90deg, rgb(0, 138, 254), rgb(0, 254, 126));
`;

const ContactContainer = styled(AboutContainer)`
  margin: 0 3rem;
  max-width: 568px;
`;

const ContactTitle = styled(SectionTitle)`
  color: #e29863;
`;

const ContactDescription = styled(ContentDescription)`
  margin-bottom: 1rem;
`;

const Contact = (): JSX.Element => (
  <ContactWrapper>
    <Section
      title="Contact"
      bg="linear-gradient(0deg, rgba(17, 53, 107, 0.33), rgb(20, 20, 20))"
    >
      <AboutContainer>
        <ContactDescription>
          Whether you&apos;re looking to collaborate on a project, or you have
          an idea for an app that&apos;s "like [facebook, twitter, instagram]
          but for [noun]," I&apos;d love to hear from you! Just drop me a line
          using the form below.
        </ContactDescription>
        <ContactForm />
      </AboutContainer>
    </Section>
  </ContactWrapper>
);

export default Contact;
