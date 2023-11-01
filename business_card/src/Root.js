import { createGlobalStyle } from "styled-components";
import App from "./App";
const GlobalStyle = createGlobalStyle`
html,body{
  margin:0;
  padding:0;
}
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,500&display=swap");

* {
font-family: "Noto Sans KR", sans-serif;
box-sizing: border-box;
}
`;

function Root() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <App />
    </>
  );
}

export default Root;
