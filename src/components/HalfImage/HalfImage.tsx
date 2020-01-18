import React from "react";
import styled from "styled-components";

interface IProps {
  children: JSX.Element;
  imgSrc: string;
}

const HalfImageWrapper = styled.div`
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  margin: 0;
  background: ${props => props.theme.dark.dark2};
  box-shadow: 0 0 10px 4px #0e0e0e8c;
  max-width: 1024px;

  @media (min-width: 500px) {
    margin: 2rem;
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
    padding: 2rem;
    align-self: center;
    max-width: 728px;
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
