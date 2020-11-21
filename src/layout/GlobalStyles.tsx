import { createGlobalStyle } from 'styled-components';

export const baseTheme = {
  colors: {
    main: '#ec7b8b',
    support: '#79e4c2'
  },
  fontColor: '#231e1f',
  fonts: {
    body: "'Open Sans','Helvetica Neue',Arial,sans-serif",
    // header: "'IBM Plex Sans',ibm-plex-sans,'Helvetica Neue',Arial,sans-serif",
    header: "'Work Sans','Helvetica Neue', Arial, sans-serif"
  },
  fontWeights: {
    header: 800
  },
  gradients: {
    main: 'linear-gradient(45deg, #ca5590, #ef9f79)',
    support: 'linear-gradient(45deg,#779cc1,#79efc3)',
    // newMain: "linear-gradient(45deg,#f37a8e,#eca8b3,#f7dcc1)"
    newMain: 'linear-gradient(45deg,#dc7587,#ea9191,#ffcc9e)'
  },
  themeColors: {
    gold: '#b9b39b',
    mint: '#9accc0',
    pink: '#d8a5ae'
  },
  dark: {
    dark1: '#141c25',
    dark2: '#202d3a'
  },
  sidesPadding: {
    xs: '1.5rem',
    s: '2.25rem',
    m: '3rem'
  }
};

export const darkTheme = {
  ...baseTheme,
  mainFontColor: '#d6dde4',
  headerColor: '#ffffff',
  navColor: '#f19399',
  headerBg:
    'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 0)), linear-gradient(90deg, rgb(255, 0, 136), rgb(252, 138, 14))',
  headerImgFilter: 'invert(1)',
  headerImgOpacity: '5%',
  headerText: '#ffffff',
  headerButtonText: '#fd727a',
  headerBorderBg:
    'linear-gradient(0deg, rgba(35, 0, 28, 0), rgba(119, 0, 255, 0)), linear-gradient(90deg, rgb(255, 0, 136), rgb(255, 141, 0))',
  workWrapperBg:
    'linear-gradient(180deg, rgba(0, 0, 0, 0.8), rgb(0, 0, 0)), linear-gradient(90deg, rgb(255, 0, 136), rgb(252, 138, 14))',
  workSectionBg:
    'linear-gradient(180deg, rgba(84, 27, 74, 0.33), rgb(20, 20, 20))',
  workColors: ['#f970c2', '#f97470', '#f9aa70', '#efc859'],
  cardBg: '#1d1a1a',
  sectionTopBorder: '1px solid #80808026',
  sectionBg: '#141414',
  textColor: '#ffffff',
  contactButton: '#66eae1',
  contactButtonBg: '#092833',
  footerBg: '#212121',
  footerBorderBg:
    'linear-gradient(0deg,rgba(35,0,28,0),rgba(119,0,255,0)),linear-gradient(90deg,rgb(0, 137, 255),rgb(0, 255, 126))',
  footerColor: '#c7d0d8',
  footerHoverColor: '#03e2d8'
};

export const lightTheme = {
  workColors: []
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans|Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans:800&display=swap');

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.body};
    background: #eef1f3;
    color: ${props => props.theme.mainFontColor};
  }

  main {
    display: block;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  *,
  *::before,
  *::after{
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  button {
    background-color: transparent;
    color: inherit;
    border-width: 0;
    padding: 0;
    cursor: pointer;
  }
  figure {
    margin: 0;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
    margin: 0;
  }

  ul, ol, dd {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0; 
    font-size: inherit;
    font-weight: ${props => props.theme.fontWeights.header};
    font-family: ${props => props.theme.fonts.header};
    color: ${props => props.theme.headerColor};
  }

  p {
    margin: 0;
  }

  cite {
    font-style:normal;
  }

  fieldset {
    border-width:0;
    padding:0;
    margin:0;
  }
`;
