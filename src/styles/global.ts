import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* wix-madefor-display-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Wix Madefor Display';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/wix-madefor-display-v10-latin-regular.woff2') format('woff2');
  }
  /* wix-madefor-display-600 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Wix Madefor Display';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/wix-madefor-display-v10-latin-600.woff2') format('woff2');
  }
  /* wix-madefor-display-800 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Wix Madefor Display';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/wix-madefor-display-v10-latin-800.woff2') format('woff2');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      background-color: #000000;

      height: 100%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      &::-webkit-scrollbar {
        display: none;
      }
    }
  `}


`

export default GlobalStyles
