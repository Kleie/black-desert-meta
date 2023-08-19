import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
        text-decoration: none;
        outline:none;
    }

    body {
        background: ${(props) => props.theme.primary};
        color: ${(props) => props.theme["base-text"]}; 
    }

    body, input, textarea, button {
        font-family: 'Titillium Web', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
