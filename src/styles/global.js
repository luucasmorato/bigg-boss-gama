import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 14px;
    }

    input, button, select {
        height: 45px;
        /* max-width: 90%; */
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px;
        margin: 7px;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        margin: 0 auto;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none
    }

    a {
        text-decoration: none
    }
`;