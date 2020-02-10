import React, { Fragment } from "react";
import { FaAngleRight } from "react-icons/fa";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.headerBg};
`;

const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  object-fit: scale-down;
  filter: ${props => props.theme.headerImgFilter} opacity(${props => props.theme.headerImgOpacity});
  opacity: ${props => props.theme.headerImgOpacity};
`;

const Attribution = styled.p`
  font-size: 0.75rem;
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  color: ${props => props.theme.mainFontColor}cc;
`;

const CTAContainer = styled.div`
  text-align: center;
  z-index: 10;
  max-width: 428px;
`;

const CTAHead = styled.h2`
  font-family: ${props => props.theme.fonts.header};
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const CTASupport = styled.p`
  font-size: 1.375rem;
  line-height: 1.5;
  margin-bottom: 2rem;

  @media (min-width: 468px) {
    font-size: 1.5rem;
  }
`;

const CTAAction = styled.a`
  color: ${props => props.theme.headerButtonText};
  font-family: ${props => props.theme.fonts.header};
  font-weight: ${props => props.theme.fontWeights.header};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-left: 6px;
  }

  @media (min-width: 468px) {
    font-size: 1.75rem;
  }
`;

const HeaderBorder = styled.div`
  background: ${props => props.theme.headerBorderBg};
  height: 16px;
`;

const Header = (): JSX.Element => (
  <Fragment>
    <HeaderContainer>
      <BgImg src="images/04.png" />
      <Attribution>
        image courtesy of
        <a
          href="https://absurd.design"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          absurd.design
        </a>
      </Attribution>
      <CTAContainer>
        <CTAHead>Hi, I&apos;m Drew</CTAHead>
        <CTASupport>
          A software developer specializing in frontend development
        </CTASupport>
        <CTAAction href="#work">
          Check out my work <FaAngleRight />
        </CTAAction>
      </CTAContainer>
    </HeaderContainer>
    <HeaderBorder />
  </Fragment>
);

export default Header;
