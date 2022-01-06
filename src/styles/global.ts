import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --black: #222222;
        --whitesmoke: #f7f8f9;
        --dimgray: #737474;
        --gray: #848484;
    };


    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--whitesmoke);
        -webkit-font-smoothing: antialiased;
    };  

    body, input, text-area, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400,
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
    }



`;