import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
/* red-hat-display-regular - latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('/fonts/red-hat-display-v12-latin-regular.woff2') format('woff2');
}
/* red-hat-display-600 - latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  src: local(''),
       url('/fonts/red-hat-display-v12-latin-600.woff2') format('woff2');
}
/* red-hat-display-900 - latin */
@font-face {
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 900;
  src: local(''),
       url('/fonts/red-hat-display-v12-latin-900.woff2') format('woff2');
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
