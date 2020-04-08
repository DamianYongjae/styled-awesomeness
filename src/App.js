import React from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  css,
  ThemeProvider,
} from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true,
  placeholder: "input",
})`
  border: none;
  border-radius: 5px;
  ${awesomeCard}
`;

const Card = styled.div`
  background-color: red;
`;

const NewButton = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${(props) => props.theme.successColor};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Form />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
  ${Card} {
    background-color: blue;
  }
`;

const Form = () => (
  <Card>
    <NewButton>Hello</NewButton>
  </Card>
);

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  &:active,
  &:focus {
    outline: none;
  }
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#2ecc71")};
  ${(props) => {
    if (props.danger) {
      return css`
        animation: ${rotation} ${props.rotationTime}s linear infinite;
      `;
    }
  }}
`;

const Anchor = styled(Button.withComponent("a"))`
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;
