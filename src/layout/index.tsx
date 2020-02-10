import React from "react";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";
import config from "../../data/SiteConfig";
// import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { darkTheme, GlobalStyle, lightTheme } from "./GlobalStyles";

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
`;

const Layout = (props: Props): JSX.Element => {
  const { children } = props;

  return (
    <ThemeProvider theme={darkTheme}>
      <StdNavLayout>
        <GlobalStyle />
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Nav />
        <MainContent>{children}</MainContent>
      </StdNavLayout>
    </ThemeProvider>
  );
};

export default Layout;
