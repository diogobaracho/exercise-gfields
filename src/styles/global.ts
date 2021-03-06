import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #5429CC;
        --green: #33CC95;
        --red: #c03131;

        --blue-light: #6933FF;

        --text-title: #363F5F;
        --text-body: #969CB3;

        --background: #f0f2f5;
        --shape: #FFF;
    }

    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px) {
            font-size: 93.75%;
        }
        @media(max-width: 720px) {
            font-size: 87.5%
        }
    }

    body {
        background: var(--background);
        --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer
    }

    [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
    }

    main {
        max-width: 1120px;
        margin: 0 auto;
        padding 2.5rem 1rem;
    }

    main section {
        margin-top: -10rem;
        background: #fff;
        border-radius: 0.25rem;
        min-height: 300px;
        padding: 1.5rem 2rem;
    }



`
