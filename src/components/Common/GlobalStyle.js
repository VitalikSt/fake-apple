import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    color: #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`;
export default GlobalStyle;