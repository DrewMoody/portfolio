import React, { Fragment } from "react";
import styled from "styled-components";
import { circuitSvg } from "../../shared/circuit";
import { CTAHeaderText, WorkText } from "../../shared/styles";
import Card, { ICard } from "../Card/Card";
import { myProjects } from "./projects";

const CardWrapper = styled.div`
  background: ${props => props.theme.dark.dark1};
  ${circuitSvg}

  > div {
    display: flex;
    overflow: scroll;

    &::after {
      content: " ";
      flex: 0 0 1.25rem;

      @media (min-width: 1024px) {
        flex: 0 0 1.375rem;
      }
    }

    > * {
      margin: 1.25rem 1rem;
      margin-right: 0;

      @media (min-width: 1024px) {
        margin: 1.25rem 1.375rem;
        margin-right: 0;
      }
    }
  }
`;

const Work = (): JSX.Element => (
  <Fragment>
    <CTAHeaderText id="work">
      <WorkText>Work</WorkText>
    </CTAHeaderText>
    <CardWrapper>
      <div>
        {myProjects.map(project => (
          <Card key={project.title} card={project} />
        ))}
      </div>
    </CardWrapper>
  </Fragment>
);

export default Work;
