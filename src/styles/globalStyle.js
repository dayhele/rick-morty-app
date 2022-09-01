import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    font-family: Inter, Sans-Serif;
  }

  * {
  box-sizing: border-box;
  }
`;

 
export default GlobalStyle;