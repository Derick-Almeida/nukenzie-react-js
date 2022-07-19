import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --grey-0: #F8F9FA;
        --grey-1: #E9ECEF;
        --grey-2: #868E96;;
        --grey-3: #343A40;
        --grey-4: #212529;
        --pink-0: #E34981;
        --pink-1: #FD377E;
        --green: #03B898;
        --shadow: #00000040;
    }
    button {
        cursor: pointer;
        outline: none;
    }
    ul, li, ol {
        list-style: none;
    }
    a {
        text-decoration: none;
    }
`;
