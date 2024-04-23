import Button from "@/common/button";
import styled from "styled-components";
import Input from "@common/input"
import { useState } from "react";
import Label from "@common/label"
import Modal from "@common/modal"
import LoginPage from "../login/LoginPage";


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
        <Modal name={"마이페이지"} children={<LoginPage/>} onClose={() => setModalOpen(false)} />
      )}
      <Label htmlFor={"id"}>사랑해요</Label>
      <Input value={vvalue} id={"id"} placeholder={"아이디"} onInputChange={handleChange} onEnterKeyUp={handleChange} />
      <Button children={"확인"} onClick={() => setModalOpen(true)}></Button>
    </div>
  );
};

export default HomePage;
