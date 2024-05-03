import * as c from "@components/celebration/Celebration.styled";
import Button from "@common/button";
import TypeSection from "./TypeSection";
import CelebrationInfoSection from "./CelebrationInfoSection";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createEventReg } from "@/apis/event";
import { useRecoilValue } from "recoil";
import { userState } from "@/stores/user";

interface CelebrationProps {
  type: string;
  title: string;
  date: string;
  theme: string;
  visibility: boolean;
}

const Index = () => {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();
  const [regData, setRegData] = useState<CelebrationProps>({
    type: "birthday", // 이벤트 종류
    title: "",
    date: "",
    theme: "cork_board", // 롤링페이퍼 배경
    visibility: true, // 노출 여부
  });

  const [bannerImage, setBannerImage] = useState(null);

  useEffect(() => {}, []);

  const handleType = (newType: string) => {
    setRegData((prev) => ({
      ...prev,
      type: newType,
    }));
  };

  const handleTitle = (value: string) => {
    setRegData((prev) => ({
      ...prev,
      title: value,
    }));
  };

  const handleDateChange = (selectedDate: Date) => {
    // 한국 시간으로 변환
    const koreaTime = selectedDate.toLocaleString("en-US", {
      timeZone: "Asia/Seoul",
    });

    const koreaDate = new Date(koreaTime);
    const formattedDate = `${koreaDate.getFullYear()}-${(koreaDate.getMonth() + 1).toString().padStart(2, "0")}-${koreaDate.getDate().toString().padStart(2, "0")}`;

    setRegData((prev) => ({
      ...prev,
      date: formattedDate,
    }));
  };

  const handleVisible = (value: boolean) => {
    setRegData((prev) => ({
      ...prev,
      visibility: value,
    }));
  };

  const handleTheme = (theme: string) => {
    setRegData((prev) => ({
      ...prev,
      theme: theme,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      setBannerImage(file);
    }
  };

  const handleSubmit = async () => {
    const formData = new FormData();

    const registerInfo = JSON.stringify({
      type: regData.type,
      title: regData.title,
      date: regData.date,
      theme: regData.theme,
      visibility: regData.visibility,
    });

    formData.append("registerInfo", registerInfo);

    if (bannerImage) {
      formData.append("bannerImage", bannerImage);
    }

    for (let [key, value] of formData.entries()) {
      console.log("ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ", key, value);
    }

    try {
      const res = await createEventReg(formData);
      console.log("post 값", res);
      navigate(`/celebrate/rolling/${res.pageUri}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <c.Container>
      <TypeSection type={regData.type} handleType={handleType} />
      <CelebrationInfoSection
        isVisible={regData.visibility}
        title={regData.title}
        handleTitle={handleTitle}
        handleVisible={handleVisible}
        handleDateChange={handleDateChange}
        handleFileChange={handleFileChange}
        handleTheme={handleTheme}
        theme={regData.theme}
      />
      <Button onClick={handleSubmit}>등록하기</Button>
    </c.Container>
  );
};

export default Index;
