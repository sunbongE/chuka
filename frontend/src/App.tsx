import styled from "styled-components";
import HomeRouter from "@routers/HomeRouter";
import { GlobalStyle } from "./styles/GlobalStyles";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Wrap = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HomeRouter />
    </>
  );
}

export default App;
