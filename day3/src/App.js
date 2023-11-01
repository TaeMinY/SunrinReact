import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "./styles/theme";

const GlobalStyle = createGlobalStyle`
  html{
    background-color: black;
  }
`;

const Title = styled.h1`
  color: blue;
`;

const Title2 = styled(Title)`
  font-size: 60px;
  &:hover {
    color: red;
    transition: 0.5s;
  }
`;

const Text = styled.div`
  font-size: 26px;
  color: ${(props) => props.color || props.theme.primary};
`;

const Container = styled.div`
  width: 100%;

  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;

  background-color: white;

  margin-right: 10px;
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Title>리액트</Title>
        <Title2>리액트 Title2</Title2>
        <Text>리액트 styled-components</Text>
        <Container>
          <Box></Box>
          <Box></Box>
          <Box></Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
