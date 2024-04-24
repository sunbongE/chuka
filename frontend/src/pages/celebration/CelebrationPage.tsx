import Navbar from "@common/navbar";
import Header from "@common/header";
import * as c from "@pages/celebration/CelebrationPage.styled";
import Input from "@common/input";
import Label from "@common/label";
import Button from "@common/button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale"; //한국어 설정

const CelebrationPage = () => {
  const [date, setDate] = useState(new Date());
  const [regData, setRegData] = useState({
    title: "",
    date: "",
  });

  const handleTitle = (value: string) => {
    setRegData((prevData) => ({ ...prevData, title: value }));
  };

  const handleDateChange = (selectedDate: Date) => {
    setDate(selectedDate);
    setRegData((prevData) => ({
      ...prevData,
      date: selectedDate.toISOString(),
    }));
  };

  const handleSubmit = () => {};

  return (
    <>
      <Header children="축하 등록하기" />
      <c.Wrap>
        <Label htmlFor="title" children="ㅊㅋ 제목" />
        <Input
          value={regData.title}
          id="title"
          placeholder="축하하는 날의 이름을 적어주세요."
          onInputChange={handleTitle}
        />
        <Label htmlFor="date" children="ㅊㅋ 날짜" />
        <c.DateInput>
          <DatePicker
            selected={date}
            onChange={handleDateChange}
            minDate={new Date()}
            locale={ko}
            dateFormat="yyyy-MM-dd"
            showIcon
            icon="ci ci-calendar"
          />
        </c.DateInput>
        <Label htmlFor="img" children="대표 이미지 설정" />
        <div></div>
        <Label htmlFor="theme" children="롤링 페이퍼 테마 선택" />
        <div></div>
        <Label htmlFor="secret" children="ㅊㅋ 공개 여부" />
        <div></div>
      </c.Wrap>
      <Button children="등록하기" onClick={handleSubmit} />
      <Navbar current="celebration" />
    </>
  );
};

export default CelebrationPage;
