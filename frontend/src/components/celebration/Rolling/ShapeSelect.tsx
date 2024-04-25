import styled from "styled-components";
import Lable from "@common/label";
import { colors } from "@styles/theme";
import Recg from "/img/img_recgPaper.png";
import Circle from "/img/img_circlePaper.png";
import Heart from "/img/img_heartPaper.png";
import { useState } from "react";

export type ButtonType = {
  onClick: () => void;
  isActive: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button<ButtonType>`
  width: 100px;
  height: 100px;
  border: 2px solid;
  border-color: ${(props) =>
    props.isActive ? colors.mainPink : colors.inputGray};
  color: ${colors.inputGray};
  background-color: ${colors.white};
`;

const ShapeSelect = () => {
  const shapeList = [
    { name: "Rectangle", image: Recg },
    { name: "Circle", image: Circle },
    { name: "Heart", image: Heart },
  ];

  const [selectedShape, setSelectedShape] = useState<string>("");
  const onClickShape = (shape: string) => {
    setSelectedShape(shape);
  };

  return (
    <Container>
      <Lable htmlFor="paper-shape" children="종이 모양 선택" />
      <Wrap>
        {shapeList.map((shape) => (
          <Button
            key={shape.name}
            isActive={selectedShape === shape.name}
            onClick={() => onClickShape(shape.name)}
          />
        ))}
      </Wrap>
    </Container>
  );
};

export default ShapeSelect;
