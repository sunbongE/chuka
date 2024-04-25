import Navbar from "@common/navbar";
import Header from "@common/header";
import ShapeSelect from "@/components/celebration/Rolling/ShapeSelect";
import { useNavigate } from "react-router-dom";
import BackgroundSelect from "@/components/celebration/Rolling/BackgroundSelect";

const RollingBackgroundSelectPage = () => {
  const navigate = useNavigate();
  const goNext = () => [navigate("/celebrate/rolling-write")];

  return (
    <>
      <Header children="배경 선택하기" label="다음" onClick={goNext} />
      <ShapeSelect />
      <BackgroundSelect />
      <Navbar current="celebration" />
    </>
  );
};

export default RollingBackgroundSelectPage;
