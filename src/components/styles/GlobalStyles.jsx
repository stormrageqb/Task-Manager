import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
        color-scheme: dark light;
    }

    body {
        min-height: 100vh;
        line-height: 1.6;
        font-weight: 300;
        font-family: ${({ theme }) => theme.font.primary};
    }

    img, picture, svg, video {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyles;
