import 'react-responsive-pagination/themes/classic.css';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px (16px * 62.5% = 10px)
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;

    --pagination-font-size: 1.5rem
  }
`;

export default GlobalStyles;
