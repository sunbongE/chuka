import Button from "@/common/button";
import styled from "styled-components";
import { colors } from "@styles/theme";
import Input from "@common/input"
import { useState } from "react";
import Label from "@common/label"


const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${colors.gray01};
`;

const Wrap = styled.div`
  display: flex;
`;

const HomePage = () => {

  const [vvalue, setVvalue] = useState("")
  
  const handleChange = (value:string) => {
    console.log(value);
    setVvalue(value)

    

  }

  return (
    <div>
      <Label htmlFor={"id"}>사랑해요</Label>
      <Input value={vvalue} id={"id"} placeholder={"아이디"} onInputChange={handleChange} onEnterKeyUp={handleChange} />
      <Button children={"확인"} onClick={() => console.log("확인")}></Button>
    </div>
  );
};

export default HomePage;
