import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import styled, { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
    }

    html {
        font-size: 10px;
        font-family: "OpenSans", sans-serif;
    }

    :root {
        // export
        --bg: #fff;
        --color1: #000;
        --color2: #3cc3b5;

        --color3: lightgray;
        --color4: #fff;
        --color5: #3cc395;
    };
    
    body[data-theme="light"] {
        --bg: #fff;
        --color1: #000;
        --color2: #3cc3b5;
    }
    body[data-theme="dark"] {
        --bg: #000;
        --color1: #fff;
        --color2: #3c43b5;
    }
    
    body {
        background-color: var(--bg);
        color: var(--text);
    }
    
    a {
        color: inherit;
    }

    .wrapper {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
    }
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Global />
        <App />
    </BrowserRouter>
);