import React, { Fragment } from "react";
import styled from "styled-components";
import { circuitSvg } from "../../shared/circuit";
import { CTAHeaderText, WorkText } from "../../shared/styles";
import Card, { ICard } from "../Card/Card";

const CardWrapper = styled.div`
  background: ${props => props.theme.dark.dark1};
  ${circuitSvg}

  > div {
    display: flex;
    overflow: scroll;

    &::after {
      content: " ";
      flex: 0 0 1.25rem;

      @media (min-width: 500px) {
        flex: 0 0 1.75rem;
      }
    }

    > * {
      margin: 1.25rem;
      margin-right: 0;

      @media (min-width: 500px) {
        margin: 1.25rem 1.75rem;
        margin-right: 0;
      }
    }
  }
`;

const test = [
  {
    background: "#9accc0",
    blurb:
      "The first site I ever made with Gatsby, and one of the first sites I ever made period. Features large hero headers (hence the name), a grid for displaying blog posts, and a beautiful UI.",
    color: "inherit",
    description: "Gatsby / React",
    name: "Gatsby Hero",
    repoRef: "https://github.com",
    siteRef: "https://gatsby-hero.netlify.com"
  },
  {
    background: "#b9b39b",
    blurb:
      "The first group project I was involved in. This is an app for training/studying based on the idea of spaced repetition. I designed the database and wrote much of the backend code. ",
    color: "#9ac6f3",
    description: "React / Node / PostgreSQL",
    name: "Space Reps",
    repoRef: "https://github.com",
    siteRef: "https://gatsby-hero.netlify.com"
  },
  {
    background: "#d8a5ae",
    blurb:
      "I'm currently in the process of building bigger, more robust applications, like a meal prep app. Stay tuned!",
    color: "inherit",
    description: "Coming soon",
    name: "More Great Projects",
    repoRef: "https://github.com",
    siteRef: "https://gatsby-hero.netlify.com"
  }
];

const Work = (): JSX.Element => (
  <Fragment>
    <CTAHeaderText id="work">
      <WorkText>Work</WorkText>
    </CTAHeaderText>
    <CardWrapper>
      <div>
        {test.map(x => {
          const card: ICard = {
            background: x.background,
            color: x.background,
            description: x.blurb,
            imgSrc:
              "https://billfish.org/wp-content/uploads/2019/08/placeholder-image.jpg",
            supportText: x.description,
            title: x.name
          };
          return <Card key={x.name} card={card} />;
        })}
      </div>
    </CardWrapper>
  </Fragment>
);

export default Work;
