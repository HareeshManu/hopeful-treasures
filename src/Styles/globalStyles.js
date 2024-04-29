import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


a {
    text-decoration: none !important;
    color: inherit !important;
  }
  
  body::-webkit-scrollbar {
    width: 5px;
  }
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }

`;
