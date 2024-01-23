import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html{
    @media (max-width: 1600px){
        font-size: 75%;
    }
    @media (max-width: 768px) {
    font-size: 55%;
    }
    @media (max-width: 500px) {
        font-size: 40%;
    }
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
}

button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background: #23d997;
        color:  white;
    } 
}

h2{
    font-weight: lighter;
    font-size: 4rem;
}

h3{
    color: white;
}

h4{
    font-weight: bold;
    font-size: 2rem;
}

a{
    font-size: 1.1rem;
}

span{
    font-weight: bold;
    color: #23d976;
}

p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}

::selection{
    background-color: #23d967;
    color: #000000;
}

`;

export default GlobalStyle;
