import React from "react";
import styled from "styled-components";

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
    padding: 3rem 3rem 2rem 3rem;
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
