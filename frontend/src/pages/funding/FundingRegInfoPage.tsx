import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/theme";
import Header from "@common/header";
import DefaultFunding from "/img/img_default_funding.png";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  width: 339px;
  height: 36px;
  padding-left: 10px;
`;

const SmallInput = styled.input`
  width: 100px;
  height: 36px;
  padding-left: 10px;
`;

const Label = styled.label``;

const SmallBtn = styled.button`
  width: 97px;
  height: 36px;
  background-color: ${colors.mainPink};
  color: white;
  font-size: 12px;
`;

const LargeBtn = styled.button`
  width: 339px;
  height: 49px;
  background-color: ${colors.mainPink};
  color: white;
`;

const Img = styled.img`
  width: 155px;
  height: 155px;
`;

const FundingRegInfoPage = () => {
  const location = useLocation();
  const { productLink } = location.state;

  const [regData, setRegData] = useState({
    product_link: productLink,
    introduce: "",
    option: "",
    goal_Amount: "",
    end_date: "",
    receiver_name: "",
    receiver_phone: "",
    postal_code: "",
    address: "",
    address_detail: "",
  });

  return (
    <>
      <Header children="펀딩 등록하기" />
      <Container>
        <Img src={DefaultFunding} />
        <Wrap>
          <Inner>
            <Label htmlFor="introduce">"한 줄 펀딩 소개"</Label>
            <Input
              id="introduce"
              value={regData.introduce}
              placeholder="펀딩글을 소개하는 문구를 작성해주세요"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  introduce: e.target.value,
                }))
              }
            />
          </Inner>
          <Inner>
            <Label htmlFor="option">"펀딩 상품 상세 옵션"</Label>
            <Input
              id="option"
              value={regData.option}
              placeholder="펀딩 받을 상품의 상세 옵션을 입력해주세요.(색상, 수량, 추가정보 등)"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  option: e.target.value,
                }))
              }
            />
          </Inner>
          <Inner>
            <Label htmlFor="goal_Amount">"펀딩 목표 금액"</Label>
            <Input
              id="goal_Amount"
              value={regData.goal_Amount}
              placeholder="금액을 입력해주세요(5000원 이상)"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  goal_Amount: e.target.value,
                }))
              }
            />
          </Inner>
          <Inner>
            <Label htmlFor="end_date">"펀딩 종료 일자"</Label>
            <Input
              id="end_date"
              value={regData.end_date}
              placeholder="펀딩 종료 일자를 입력해주세요(ex 20250518)"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  end_date: e.target.value,
                }))
              }
            />
          </Inner>
          <Inner>
            <Label htmlFor="receiver_name">"수령인 이름"</Label>
            <Input
              id="receiver_name"
              value={regData.receiver_name}
              placeholder="이름 입력"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  end_date: e.target.value,
                }))
              }
            />
          </Inner>
          <Inner>
            <Label htmlFor="receiver_phone">"수령인 연락처"</Label>
            <Input
              id="receiver_phone"
              value={regData.receiver_phone}
              placeholder="휴대폰 번호 입력(ex 01043286612)"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  end_date: e.target.value,
                }))
              }
            />
          </Inner>

          <Label htmlFor="address"></Label>
          <div style={{ display: "flex", gap: "10px" }}>
            <SmallInput
              id="address"
              value={regData.postal_code}
              placeholder="우편번호"
              onChange={(e) =>
                setRegData((prevData) => ({
                  ...prevData,
                  postal_code: e.target.value,
                }))
              }
            />
            <SmallBtn>우편번호 검색</SmallBtn>
          </div>

          <Input
            id="address"
            value={regData.address}
            placeholder="주소를 입력해주세요"
            onChange={(e) =>
              setRegData((prevData) => ({
                ...prevData,
                address: e.target.value,
              }))
            }
          />
          <Input
            id="address"
            value={regData.address_detail}
            placeholder="상세 주소를 입력해주세요"
            onChange={(e) =>
              setRegData((prevData) => ({
                ...prevData,
                address_detail: e.target.value,
              }))
            }
          />
          <LargeBtn>펀딩 상품 등록</LargeBtn>
        </Wrap>
      </Container>
    </>
  );
};

export default FundingRegInfoPage;
