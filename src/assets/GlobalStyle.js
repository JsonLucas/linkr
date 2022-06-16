import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Passion+One:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a, a:active, a:link{
        text-decoration: none;
        color: white;
    }

    body {
        background-color: #333;
    }
`;

export default GlobalStyle;