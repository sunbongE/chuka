import Button from "@/common/button";
import styled from "styled-components";
import Input from "@common/input"
import { useState } from "react";
import Label from "@common/label"

import LoginPage from "../login/LoginPage";
import RModal from "@common/responsiveModal"
import Navbar from "@common/navbar"

import RadioButton from "@/common/radioButton";
import { MdCake } from "react-icons/md";


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Wrap = styled.div`
  display: flex;
`;

const HomePage = () => {
  const [vvalue, setVvalue] = useState("");

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const handleChange = (value: string) => {
    console.log(value);
    setVvalue(value);
  };

  //라디오 버튼 테스트
  const [value, setValue] = useState("");
  const [selected, setSelected] = useState("");
  const handleRadioChange = (value: string) => {
    setSelected(value); // 라디오 버튼 선택값을 변경
    console.log("버튼선택", value);
  };



  return (
    <div>
      { modalOpen && (
        <RModal name={"마이페이지"} children={<LoginPage/>} onClose={() => setModalOpen(false)} />
      )}

      <Label htmlFor={"id"}>사랑해요</Label>
      <Input value={vvalue} id={"id"} placeholder={"아이디"} onInputChange={handleChange} onEnterKeyUp={handleChange} />
      <Button children={"확인"} onClick={() => setModalOpen(true)}></Button>
      <Navbar current="home"/>
      
      <RadioButton
        value="option1"
        checked={selected === "option1"}
        onChange={() => handleRadioChange("option1")}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <MdCake />
          <span>생일</span>
        </div>
      </RadioButton>
    </div>
  );
};

export default HomePage;
