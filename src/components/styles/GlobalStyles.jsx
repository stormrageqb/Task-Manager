import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        line-height: 1.6;
        font-weight: 300;

    }
`;

export default GlobalStyles;
