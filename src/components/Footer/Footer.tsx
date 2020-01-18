import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: linear-gradient(5deg,#151e29,#202c3a);
  box-shadow: 0px 3px 6px 3px #000000a1;
  color: #c7d0d8;
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
      color: #c7d0d8;

      &:hover {
        color: #e19aa6;
      }
    }
  }
`;

const Footer = (): JSX.Element => (
  <StyledFooter>
    <IconsContainer>
      <a target="_blank" href="https://www.github.com">
        <FaGithub />
      </a>
      <a target="_blank" href="https://www.linkedin.com">
        <FaLinkedin />
      </a>
    </IconsContainer>
    <p>Uncopyright</p>
  </StyledFooter>
);

export default Footer;
