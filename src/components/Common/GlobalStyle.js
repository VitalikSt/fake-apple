import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
		background: #000;
		font-size: 14px;
    line-height: 1.42857143;
    color: #888;
  }

	.container {
		max-width: 1680px;
		margin: 0 auto;
		padding: 0 15px;
	}
`;
export default GlobalStyle;