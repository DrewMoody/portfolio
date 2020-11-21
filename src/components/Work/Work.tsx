import React from 'react';
import styled from 'styled-components';
import { darkTheme } from '../../layout/GlobalStyles';
import Card, { ICard } from '../About/Card/Card';
import Section from '../Section/Section';
import { myProjects } from './projects';

/**
 * TODO: Fix -- color scheme hardcoded to darkScheme
 */
const WorkWrapper = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 0)),
    linear-gradient(90deg, rgb(255, 0, 136), rgb(252, 138, 14));
`;

const CardWrapper = styled.div`
  > div {
    display: flex;
    overflow: scroll;
    padding-left: ${props => props.theme.sidesPadding.xs};

    @media (min-width: 468px) {
      padding-left: ${props => props.theme.sidesPadding.s};
    }

    @media (min-width: 768px) {
      padding-left: ${props => props.theme.sidesPadding.m};
    }

    &::after {
      content: ' ';
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
  <WorkWrapper id="work">
    <Section
      title="Work"
      bg="linear-gradient(180deg, rgba(84, 27, 74, 0.33), rgb(20, 20, 20))"
    >
      <CardWrapper>
        <div>
          {myProjects.map((project, i) => {
            const color = darkTheme.workColors[i % darkTheme.workColors.length];
            return (
              <Card
                key={project.title}
                card={{
                  ...project,
                  background: color,
                  color
                }}
              />
            );
          })}
        </div>
      </CardWrapper>
    </Section>
  </WorkWrapper>
);

export default Work;
