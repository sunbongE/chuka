import styled from "styled-components";
import Lable from "@common/label";
import { colors } from "@styles/theme";

export type ButtonType = {
    onClick: () => void;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button<ButtonType>`
  width: 130px;
  height: 60px;
  border: 2px solid ${colors.inputGray};
  color: ${colors.inputGray};
  background-color: ${colors.white};
`;

const BackgroundSelect = () => {
  const handleClick = () => {};
  return (
    <Container>
      <Wrap>
        <Lable htmlFor="paper-background" children="종이 배경 선택" />
        <Button onClick={handleClick} />
      </Wrap>
    </Container>
  );
};

export default BackgroundSelect;
