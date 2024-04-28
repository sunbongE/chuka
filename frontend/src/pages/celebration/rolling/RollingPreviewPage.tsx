import RollingPreview from "@/components/celebration/Rolling/RollingRegInfo/RollingPreview";
import Navbar from "@common/navbar";
import { useState, useEffect } from "react";

const RollingPreviewPage = () => {
  const [regData, setRegData] = useState({
    shape: "",
    background_color: "",
    background_image: "",
    font: "",
    font_color: "",
    content: "",
    nickname: "",
  });

  useEffect(() => {
    // api 연결 로직 추가 예정
  }, [regData]);

  const handleData = (data: any) => {
    setRegData(data);
  };

  return (
    <>
      <RollingPreview onUpdateData={handleData} />
      <Navbar current="celebration" />
    </>
  );
};

export default RollingPreviewPage;