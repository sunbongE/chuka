import React, { useState } from "react";
import styled from "styled-components";

import present from "/img/img_present_funding.png";
import { colors } from "@/styles/theme";
import RecCard from "@common/RecCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const Carousel = styled.div`
  display: flex;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const Label = styled.label``;

const Input = styled.input`
  width: 339px;
  height: 36px;
  padding-left: 10px;
`;

const Button = styled.button`
  width: 339px;
  height: 36px;
  background-color: ${colors.mainPink};
  color: white;
`;

const Text = styled.p`
  color: ${colors.mainPink};
	font-size: 1em;
	font-weight: 700;
`;

const FundingRegPage = () => {
  const [url, setUrl] = useState("");

  return (
    <Container>
      <Img src={present} alt="" />
      <Wrap>
        <Label htmlFor="present-url">
          받고 싶은 선물을 구매할 수 있는 링크를 입력해주세요.
        </Label>
        <Input
          id="present-url"
          placeholder="상품 구매 링크 입력"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button>다음</Button>
				<div style={{marginTop:'20px'}}></div>
        <Text>ㅊㅋ 추천 선물</Text>
        <Carousel>
          <RecCard
            imgUrl={present}
            title="삼성 갤럭시 버즈2 프로"
            amount="138880"
          />
          <RecCard
            imgUrl={present}
            title="삼성 갤럭시 버즈2 프로"
            amount="138880"
          />
        </Carousel>
      </Wrap>


    </Container>
  );
};

export default FundingRegPage;
