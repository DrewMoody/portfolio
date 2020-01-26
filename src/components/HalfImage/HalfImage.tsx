import React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
  imgSrc: string;
}

// for img to go top half
// flex-direction: column;
// on img
// flex: 1 1 60vw;
// object-position: 50% 30%;
const HalfImageWrapper = styled.div`
  display: flex;
  overflow: hidden;
  margin: 0;
  background: ${props => props.theme.dark.dark2};
  box-shadow: 0 0 10px 4px #0e0e0e8c;
  max-width: 1024px;

  @media (min-width: 500px) {
    margin: 2rem;
    border-radius: 8px;
  }

  > img {
    flex: 1 1 33%;
    filter: brightness(0.9);
    min-width: 0;
    min-height: 0;
    object-fit: cover;
    object-position: 40% 50%;
    display: none;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  > div {
    flex: 1 1 67%;
    padding: 1.5rem;
    align-self: center;
    max-width: 728px;
    margin: 1.5rem 0 3rem 0;

    @media (min-width: 600px) {
      padding: 2rem;
    }
  }
`;

export default (props: IProps) => {
  const { imgSrc, children } = props;
  return (
    <HalfImageWrapper>
      <img src={imgSrc} />
      <div>{children}</div>
    </HalfImageWrapper>
  );
};
