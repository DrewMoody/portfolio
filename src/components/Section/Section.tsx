import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: JSX.Element;
  title: string;
  bg?: string;
}

// &:not(:first-of-type) {
//   border-top: ${props => props.theme.sectionTopBorder};
// }

const SectionWrapper = styled.div`
  padding-bottom: 4rem;
  background: ${props => props.theme.sectionBg};
  border-top: ${props => props.theme.sectionTopBorder};

  > h1 {
    font-size: 3.5rem;
    color: white;
    margin: 3rem ${props => props.theme.sidesPadding.xs} 2rem;

    @media (min-width: 468px) {
      margin: 3rem ${props => props.theme.sidesPadding.m} 2rem;
    }

    @media (min-width: 768px) {
      margin: 4rem 4rem 3rem;
      font-size: calc(1vw + 3.5rem);
    }

    @media (min-width: 1024px) {
      margin: calc(2vw + 3rem) 5rem calc(2vw + 2rem);
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 5rem;
  }

  @media (min-width: 1024px) {
    padding-bottom: calc(2vw + 4rem);
  }
`;

export default (props: IProps) => {
  const { title, children, bg } = props;
  return (
    <SectionWrapper style={bg ? { background: `${bg}` } : undefined}>
      <h1>{title}</h1>
      <div>{children}</div>
    </SectionWrapper>
  );
};
