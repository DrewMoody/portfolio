import React from "react";
import styled from "styled-components";

// background: #fffdfd3d;
// backdrop-filter: blur(40px) saturate(1.8);

const StyledHeader = styled.header`
  color: #231e1f;
  display: flex;
  justify-content: space-between;
  padding: 0 2.5rem;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  flex-direction: column;
  align-items: center;

  @media (min-width: 600px) {
    flex-direction: row;
    align-items: unset;
  }

  a {
    font-weight: bold;
  }

  nav {
    display: flex;
    flex-direction: row;

    svg {
      font-size: 32px;
      margin-bottom: 4px;
    }

    a {
      padding: 1.5rem 0.5rem 0.5rem 0.5rem;
      font-size: 1rem;
      align-self: stretch;

      &:not(:last-child) {
        margin-right: 1.5rem;
      }
    }

    a.selected {
      box-shadow: inset 0 4px 0 0 ${props => props.theme.fontColor};
    }
  }
`;

const StyledLogo = styled.a`
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.75rem;
  padding-top: 1rem;

  @media (min-width: 600px) {
    padding-bottom: 0.875rem;
  }

  svg {
    margin: 18px 18px 36px 18px;
    width: 36px;
  }
`;

const Header = (): JSX.Element => (
  <StyledHeader>
    <StyledLogo href="#">Drew Moody</StyledLogo>
    <nav>
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
  </StyledHeader>
);

export default Header;

// import { Link } from "gatsby";
// <Link to="/blog">Blog</Link>
