import styled from "styled-components";
import { colors } from "./styles/theme";
import Button from "@components/atoms/button"

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
      <Button children={"확인"} onClick={() => console.log("확인")}></Button>
    </>
  );
}

export default App;
