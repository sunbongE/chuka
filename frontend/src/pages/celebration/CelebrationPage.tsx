import Navbar from "@common/navbar";
import Header from "@common/header";
import * as c from "@pages/celebration/CelebrationPage.styled";
import Input from "@common/input";
import Label from "@common/label";
import Button from "@common/button";
import Calendar from "@components/calendar";
import { useState } from "react";
import { getDate } from "date-fns";

const CelebrationPage = () => {
  const [regData, setRegData] = useState({
    title: "",
    date: "",
  });

  const handleTitle = (value: string) => {
    setRegData((prevData) => ({ ...prevData, title: value }));
  };

  const handleDateChange = (selectedDate: Date) => {
    setRegData((prevData) => ({
      ...prevData,
      date: selectedDate.toISOString(),
    }));
  };

  const handleSubmit = () => {};

  return (
    <>
      <Header children="축하 등록하기" />
      <c.Container>
        <c.InputWrap>
          <Label htmlFor="title" children="ㅊㅋ 제목" />
          <Input
            value={regData.title}
            id="title"
            placeholder="축하하는 날의 이름을 적어주세요."
            onInputChange={handleTitle}
          />
        </c.InputWrap>
        <c.InputWrap>
          <Label htmlFor="date" children="ㅊㅋ 날짜" />
          <Calendar />
          <c.P>선택한 날짜부터 롤링페이퍼가 공개됩니다.</c.P>
        </c.InputWrap>
        <c.InputWrap>
          <Label htmlFor="img" children="대표 이미지 설정" />
        </c.InputWrap>
        <c.InputWrap>
          <Label htmlFor="theme" children="롤링 페이퍼 테마 선택" />
        </c.InputWrap>
        <c.InputWrap>
          <Label htmlFor="secret" children="ㅊㅋ 공개 여부" />
        </c.InputWrap>
      <Button children="등록하기" onClick={handleSubmit} />
      </c.Container>
      <Navbar current="celebration" />
    </>
  );
};

export default CelebrationPage;
