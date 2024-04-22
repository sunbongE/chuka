import styled from "styled-components";
import { colors } from "./styles/theme";
import HomePage from "@pages/home/HomePage";
import { GlobalStyle } from "./styles/GlobalStyles";
import ScrollToTop from "./utils/scrollToTop";

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
      <img src={login} />
      <Button children={"확인"} onClick={() => console.log("확인")}></Button>
    </>
  );
}

export default App;
