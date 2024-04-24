import Button from "@/common/button";
import styled from "styled-components";
import Input from "@common/input"
import { useState } from "react";
import Label from "@common/label"
import Modal from "@common/modal"
import LoginPage from "../login/LoginPage";
import RModal from "@common/responsiveModal"
import Navbar from "@common/navbar"
import Header from "@common/header";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Wrap = styled.div`
  display: flex;
`;

const HomePage = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const [vvalue, setVvalue] = useState("")
  
  const handleChange = (value:string) => {
    console.log(value);
    setVvalue(value)
  }



  return (
    <div>
      { modalOpen && (
        <RModal name={"마이페이지"} children={<LoginPage/>} onClose={() => setModalOpen(false)} />
      )}

      <Label htmlFor={"id"}>사랑해요</Label>
      <Input value={vvalue} id={"id"} placeholder={"아이디"} onInputChange={handleChange} onEnterKeyUp={handleChange} />
      <Button children={"확인"} onClick={() => setModalOpen(true)}></Button>
      <Navbar current="home"/>
      <Header children={"펀딩하기"}/>
    </div>
  );
};

export default HomePage;
