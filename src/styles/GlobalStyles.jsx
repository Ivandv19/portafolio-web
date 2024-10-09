// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #000000;   /* Negro suave */
    --color-secondary: #B22222; /* Rojo oscuro */
    --color-accent: #FF0000;    /* Rojo brillante */
    --color-background: #2c3e50; /* Fondo oscuro */
    --color-text: #ecf0f1;       /* Texto claro */
    --color-secondary-gradient: linear-gradient(90deg, #B22222, #FF0000);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: var(--color-background);
    color: var(--color-text);
  }
`;

export default GlobalStyle;