import styled from "styled-components";

export const Button = styled.button`
  padding: 6px;
  height: 18px;
  width: 60px;
  margin: 6px;
  border-radius: 2px;
  position: relative;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  webkit-appearance: unset;

  > div {
    align-self: stretch;
    background: ${props => props.theme.dark.dark2};
    border-radius: 2px;
    position: absolute;
    top: 2px;
    right: 2px;
    bottom: 2px;
    left: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CTAHeaderText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  background: ${props => props.theme.dark.dark1};
  background: linear-gradient(20deg, #131b25, #202c3a);
  box-shadow: 0px 7px 6px 2px #000000a1;
  box-shadow: 0px 3px 6px 3px #000000a1;
  z-index: 1;

  @media (min-width: 768px) {
    height: 128px;
  }

  @media (min-width: 1024px) {
    height: 156px;
  }
`;

export const ContentTitle = styled.h2`
  color: #a9e8cb;
  margin-top: 0.5rem;
  margin-bottom: 0.125rem;
  font-size: 2rem;
  letter-spacing: 0.015rem;
`;

export const SectionTitle = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  font-size: 2.375rem;
  letter-spacing: 0.015rem;

  @media (min-width: 600px) {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const ContentDescription = styled.p`
  margin-bottom: 2rem;
  color: #d6dde4;
  line-height: 1.625;
  font-size: 1rem;
  flex-grow: 1;

  @media (min-width: 599px) {
    font-size: 1.125rem;
  }
`;

export const SectionHeader = styled.p`
  font-family: ${props => props.theme.fonts.header};
  font-size: 3rem;
  color: #d6dde4;

  @media (min-width: 768px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const WorkText = styled(SectionHeader)`
  color: #de8d98;
`;

export const AboutText = styled(SectionHeader)`
  color: #7db9ab;
`;

export const ContactText = styled(SectionHeader)`
  color: #dc915b;
`;
