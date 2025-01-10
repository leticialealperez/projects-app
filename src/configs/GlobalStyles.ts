import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", serif;
        color: #2a3759;
    }

    h1 {
        font-size: 38px;
    }

    a {
        text-decoration: none;
        color: #ff8533;
    }

    a:hover {
        text-decoration: underline;
    }

`;
