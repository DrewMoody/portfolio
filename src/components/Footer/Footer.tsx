import React, { Fragment } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const FooterBorder = styled.div`
  background: ${props => props.theme.footerBorderBg};
  height: 16px;
`;

const StyledFooter = styled.footer`
  background: ${props => props.theme.footerBg};
  color: ${props => props.theme.footerColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const IconsContainer = styled.div`
  a {
    margin-right: 1rem;

    > svg {
      height: 2rem;
      width: 2rem;
      color: ${props => props.theme.footerColor};

      &:hover {
        color: ${props => props.theme.footerHoverColor};
      }
    }
  }
`;

const Footer = (): JSX.Element => (
  <Fragment>
    <FooterBorder />
    <StyledFooter>
      <IconsContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.github.com/drewmoody"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/moodydrew/"
        >
          <FaLinkedin />
        </a>
      </IconsContainer>
      <p>Uncopyright</p>
    </StyledFooter>
  </Fragment>
);

export default Footer;
