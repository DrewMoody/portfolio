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
  flex: 0 0 84%;
  min-width: 300px;

  @media (min-width: 600px) {
    flex: 0 0 46%;
    min-width: 352px;
    max-width: 440px;
  }

  @media (min-width: 1024px) {
    flex: 1 0 34%;
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

const CardTitle = styled(ContentTitle)`
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const CardDescription = styled(ContentDescription)`
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const CardSupport = styled.h3`
  color: #a9e8cbd4;
  font-size: 1.125rem;
  margin-bottom: 1.25rem;
  letter-spacing: 0.015rem;

  @media (min-width: 769px) {
    font-size: 1.25rem;
    margin-bottom: 1.75rem;
  }
`;

export interface ICard {
  imgSrc?: string;
  title: string;
  supportText?: string;
  description: string;
  color: string;
  background: string;
  repoRef?: string | null;
  siteRef?: string | null;
}

interface IProps {
  card: ICard;
}

export default (props: IProps) => {
  const { card } = props;

  const openLink = (link: string) => () => window.open(link, "_blank");

  return (
    <CardContainer style={{ borderTop: `8px solid ${card.color}cc` }}>
      {card.imgSrc && <img src={card.imgSrc} />}
      <CardInfo>
        <CardTitle style={{ color: card.color }}>{card.title}</CardTitle>
        <CardSupport style={{ color: card.color }}>
          {card.supportText}
        </CardSupport>
        <CardDescription>{card.description}</CardDescription>
      </CardInfo>
      <ButtonContainer>
        {!!card.repoRef && (
          <CardButton
            onClick={openLink(card.repoRef)}
            style={{ background: card.background }}
          >
            <div style={{ color: card.color }}>Repo</div>
          </CardButton>
        )}
        {card.siteRef && (
          <CardButton
            onClick={openLink(card.siteRef)}
            style={{ background: card.background }}
          >
            <div style={{ color: card.color }}>Site</div>
          </CardButton>
        )}
      </ButtonContainer>
    </CardContainer>
  );
};
