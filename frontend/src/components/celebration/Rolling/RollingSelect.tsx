import styled from "styled-components";
import Lable from "@common/label";
import { colors } from "@styles/theme";
import Recg from "/img/img_recgPaper.png";
import Circle from "/img/img_circlePaper.png";
import Heart from "/img/img_heartPaper.png";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

export type ShapgeButtonType = {
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
  margin-bottom: 20px;
`;

export const ShapeButton = styled.button<ShapgeButtonType>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 2px solid;
  border-color: ${(props) =>
    props.isActive ? colors.mainPink : colors.inputGray};
  color: ${(props) => (props.isActive ? colors.mainPink : colors.gray)};
  background-color: ${colors.white};
`;

export const Img = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 5px;
`;

export const BackgroundButton = styled.button<{ isActive: boolean }>`
  display: flex;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 60px;
  border: 2px solid;
  border-color: ${(props) =>
    props.isActive ? colors.mainPink : colors.inputGray};
  color: ${(props) => (props.isActive ? colors.mainPink : colors.gray)};
  background-color: ${colors.white};
`;

const RollingSelect = () => {
  const [regData, setRegData] = useState({
    shape: "",
    background_color: "",
    background_image: "",
  });

  const shapeList = [
    { name: "사각형", image: Recg, value: "rectangle" },
    { name: "원형", image: Circle, value: "circle" },
    { name: "하트", image: Heart, value: "heart" },
  ];

  const [backgroundType, setBackgroundType] = useState<string>("");
  const [isRegOpen, setIsRegOpen] = useState<boolean>(false);

  const handleSelectShape = (shape: string) => {
    setRegData((prevData) => ({
      ...prevData,
      shape: shape,
      background_color: "",
      background_image: "",
    }));
  };

  const handleSelectColor = () => {
    setBackgroundType(backgroundType === "color" ? "" : "color");
    setRegData((prevData) => ({
      ...prevData,
      background_color: '',
      background_image: ''
    }))
  };

  const handleSelectImg = () => {
    setBackgroundType(backgroundType === "img" ? "" : "img");
    setRegData((prevData) => ({
      ...prevData,
      background_image:,
      background_color: ''
    }))
  };

  const onRegister = async () => {
    console.log(regData);
    setIsRegOpen(true);
  };

  return (
    <Container>
      <Lable htmlFor="paper-shape" children="종이 모양 선택" />
      <Wrap>
        {shapeList.map((shape) => (
          <ShapeButton
            key={shape.name}
            isActive={regData.shape === shape.name}
            onClick={() => handleSelectShape(shape.name)}
          >
            <Img src={shape.image} alt={shape.name} />
            {shape.name}
          </ShapeButton>
        ))}
      </Wrap>
      <Lable htmlFor="paper-background" children="종이 배경 선택" />
      <Wrap>
        <BackgroundButton
          onClick={handleSelectColor}
          isActive={backgroundType === "color"}
        >
          색상 선택
        </BackgroundButton>
        <BackgroundButton
          isActive={backgroundType === "img"}
          onClick={handleSelectImg}
        >
          <IoMdAdd /> 사진 업로드
        </BackgroundButton>
      </Wrap>
    </Container>
  );
};

export default RollingSelect;
