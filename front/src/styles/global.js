import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  font-family: Roboto, sans-serif;
  box-sizing: border-box;
  color: #fff;
}

body {
  background:midnightblue ;
  -webkit-font-smothing: antialiased !important
}

ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none !important;
}
`;
