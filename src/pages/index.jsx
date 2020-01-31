import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import Layout from '../layout';
import Work from '../components/Work/Work';
import Footer from '../components/Footer/Footer';
import SEO from '../components/SEO/SEO';
import config from '../../data/SiteConfig';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#f1a36c'
    },
    type: 'dark'
  }
});

const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: ${props => props.theme.gradients.newMain};
`;

const StyledCTA = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const CTAContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 50%;
  min-width: 0;
`;

const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 428px;
  padding: 1rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  @media (min-width: 1024px) {
    width: 90%;
  }
`;

// text-shadow: -1px 1px 1px #00000033;

const CTAHead = styled.p`
  font-family: ${props => props.theme.fonts.header};
  font-size: 2.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 404px) {
    font-size: 3rem;
  }

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }

  @media (min-width: 930px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const CTASupport = styled.p`
  font-size: 1.375rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (min-width: 404px) {
    font-size: 1.5rem;
  }
`;

const CTAButton = styled.button`
  box-shadow: -1px 3px 4px 0px #00000054;
  border-radius: 4px;
  padding: 0.75rem;
  font-family: ${props => props.theme.fonts.header};
  font-size: 1.5rem;
  color: #f1ebe5;
  background: ${props => props.theme.dark.dark2};
  background: linear-gradient(20deg, #202d3a, #273746);

  @media (min-width: 930px) {
    font-size: 1.75rem;
  }
`;

const AttributionWrapper = styled.div`
  display: none;
  flex-direction: column;
  flex: 1 1 50%;
  text-align: end;
  overflow: hidden;
  position: relative;

  @media (min-width: 768px) {
    display: flex;
  }

  p {
    font-size: 0.75rem;
    position: absolute;
    bottom: 1.5rem;
    right: 1.5rem;
  }
`;

export const MaxSizeImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: scale-down;
  flex: 1 1 50%;
  min-width: 0;
  min-height: 0;
`;

const skills = [
  'frontend development',
  'Angular',
  'RxJS',
  'TypeScript',
  'SCSS',
  'React',
  'HTML',
  'CSS'
];

class Index extends React.Component {
  // interval;

  constructor() {
    super();
    this.state = {
      displayedSkill: skills[0]
    };
  }

  // componentDidMount() {
  //   this.interval = setInterval(() => this.updateSkill(), 3000);
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // updateSkill() {
  //   const { displayedSkill } = this.state;
  //   // let nextSkill = skills.indexOf(displayedSkill) + 1;
  //   // nextSkill = nextSkill === skills.length ? 0 : nextSkill;
  //   // this.setState({ displayedSkill: skills[nextSkill] });
  // }

  render() {
    const { displayedSkill } = this.state;
    return (
      <ThemeProvider theme={darkTheme}>
        <Layout>
          <HomeContainer>
            <Helmet title={config.siteTitle} />
            <SEO />
            <StyledCTA>
              <CTAContainer>
                <CTAContent>
                  <CTAHead>Hi, I&apos;m Drew</CTAHead>
                  <CTASupport>
                    A software developer specializing in
                    {` ${displayedSkill}`}
                  </CTASupport>
                  <CTAButton type="button" onClick={() => navigate('#work')}>
                    Check out my work
                  </CTAButton>
                </CTAContent>
              </CTAContainer>
              <AttributionWrapper>
                <MaxSizeImg src="images/04.png" alt="big-brain" />
                <p>
                  image courtesy of
                  <a
                    href="https://absurd.design"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {' '}
                    absurd.design
                  </a>
                </p>
              </AttributionWrapper>
            </StyledCTA>
          </HomeContainer>
          <Work />
          <About />
          <Contact />
          <Footer />
        </Layout>
      </ThemeProvider>
    );
  }
}

export default Index;
