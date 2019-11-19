import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
    }

    body, input, button {
        font-size: 14px;
    }

    input, button, select {
        height: 45px;
        border-radius: 4px;
        border: 1px solid #000;
        padding: 10px;
        margin: 7px;
    }

    input, select {
        color: #E9511D !important;
        border: 1px solid #c4c4c4;
        background: #fff;
        font-size: 1rem;
    }

    select {
        border: 1px solid #E9511D;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        margin: 0 auto;
    }

    button {
        cursor: pointer;
        background: #E9511D;
        color: #fff;
        font-weight: bold;
        border: none;
        transition: .2s;
        box-shadow: 2px 2px 7px 1px rgba(0,0,0,0.3);

        &:hover {
            opacity: .7;
        }
    }

    ul {
        list-style: none
    }

    a {
        text-decoration: none
    }
`;