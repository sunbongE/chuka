import React from "react";
import Button from "@/common/button";
import styled from "styled-components";
import { colors } from "@styles/theme";
import login from "icon/icon_login.png";

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
  return (
    <div>
      <img src={login} />
      {/* <Button onClick={()=> (console.log('확인'))}>확인</Button> */}
      {/* <Button text='확인' onClick={()=> (console.log('확인'))}></Button> */}
      <Button children={"확인"} onClick={() => console.log("확인")}></Button>
    </div>
  );
};

export default HomePage;
