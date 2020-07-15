import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html
    {
        font-size: 62.5%; /* 1rem = 10px */
    }
    *:focus {
        outline: 0;
    }

    html,body,#root {
        height: 100%;
    }

    body {
        -webkit-font-smoothing: antialised;
    }

    input {
        border: 0;
    }



    a {
        text-decoration: none
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
        background: none;
        border: 0;
    }

    input {
        background: none;
    }
    /*  media queries */
    @media (max-width : 600 ) {
        html
        {
            font-size: 30%; /* 1rem = 10px */
        }
    }
`;
