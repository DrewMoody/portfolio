import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React, { Fragment } from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import config from "../../data/SiteConfig";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SEO from "../components/SEO/SEO";
import Work from "../components/Work/Work";
import Layout from "../layout";

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#f1a36c"
    },
    type: "dark"
  }
});

const HomeContainer = styled.div``;

const Index = (): JSX.Element => (
  <ThemeProvider theme={darkTheme}>
    <Layout>
      <Fragment>
        <HomeContainer>
          <Helmet title={config.siteTitle} />
          <SEO />
        </HomeContainer>
        <Header />
        <Work />
        <About />
        <Contact />
        <Footer />
      </Fragment>
    </Layout>
  </ThemeProvider>
);

export default Index;
