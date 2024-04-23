import { BrowserRouter } from "react-router-dom";


import styled from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import ScrollToTop from "./utils/scrollToTop";
import HomeRouter from "@routers/HomeRouter";


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
    <BrowserRouter>
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <HomeRouter />
    </BrowserRouter>
  );
}

export default App;
