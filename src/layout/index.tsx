import React from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import config from "../../data/SiteConfig";
// import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { GlobalStyle, theme } from "./GlobalStyles";

interface Props {
  children: JSX.Element;
}

const StdNavLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  > div:first-child {
    padding-top: 62px;
  }
`;

const Layout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <StdNavLayout>
        <GlobalStyle />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        <MainContent>{children}</MainContent>
      </StdNavLayout>
    </ThemeProvider>
  );
};

export default Layout;
