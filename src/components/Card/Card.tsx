import React from "react";
import styled from "styled-components";
import { Button, ContentDescription, ContentTitle } from "../../shared/styles";

const CardContainer = styled.div`
  overflow: hidden;
  border-radius: 4px;
  background: ${props => props.theme.dark.dark2};
  box-shadow: 0 0 10px 4px #0e0e0e8c;
  display: flex;
  flex-direction: column;
  flex: 0 0 42%;
  min-width: 368px;

  @media (min-width: 600px) {
    min-width: 442px;
  }

  @media (min-width: 1024px) {
    flex: 1 0 28%;
  }

  img {
    max-width: 100%;
    filter: brightness(0.8);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
`;

const CardButton = styled(Button)`
  background: linear-gradient(45deg, #80969e, #a9e8cb);

  > div {
    color: #a9e8cb;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1.25rem;
  margin-top: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const CardInfo = styled.div`
  padding: 1.25rem;
`;

const CardSupport = styled.h3`
  color: #a9e8cbd4;
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
  letter-spacing: 0.015rem;
`;

export interface ICard {
  imgSrc?: string;
  title: string;
  supportText?: string;
  description: string;
  color: string;
  background: string;
}

interface IProps {
  card: ICard;
}

export default (props: IProps) => {
  const { card } = props;
  return (
    <CardContainer>
      <img src={card.imgSrc} />
      <CardInfo>
        <ContentTitle style={{ color: card.color }}>{card.title}</ContentTitle>
        <CardSupport style={{ color: card.color + "de" }}>
          {card.supportText}
        </CardSupport>
        <ContentDescription>{card.description}</ContentDescription>
      </CardInfo>
      <ButtonContainer>
        <CardButton style={{ background: card.background }}>
          <div style={{ color: card.color }}>Repo</div>
        </CardButton>
        <CardButton style={{ background: card.background }}>
          <div style={{ color: card.color }}>Site</div>
        </CardButton>
      </ButtonContainer>
    </CardContainer>
  );
};
