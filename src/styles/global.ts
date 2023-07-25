import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        list-style: none;
        text-decoration: none;
    }

    body {
        background: ${(props) => props.theme["black-500"]};
        color: ${(props) => props.theme.white}; 
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
