import { createGlobalStyle } from "styled-components";
import { colorsPallete } from "./variables";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: "Montserrat";
    background-color: ${colorsPallete.grayFuscous};
  }

  *,*::before, *::after{
    box-sizing: border-box;
  }

  .paddingXs{
    padding-top: 20px; 
  }

  .containerSettings{
    max-width: 1150px;
  }
`;

export default GlobalStyle;
