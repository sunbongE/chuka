import styled from "styled-components";
import { colors } from "./styles/theme";
import HomePage from "@pages/home/HomePage";
import { GlobalStyle } from "./styles/GlobalStyles";
import ScrollToTop from "./utils/scrollToTop";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray01};
`;

const Wrap = styled.div`
  display: flex;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* <ScrollToTop /> */}
      <HomePage />
    </>
  );
}

export default App;
