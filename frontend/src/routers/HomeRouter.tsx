import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import HomePage from "@pages/home/HomePage";
import CelebrationPage from "@/pages/celebration/CelebrationPage";
import AlarmPage from "@/pages/alarm/AlarmPage";
import MyPage from "@/pages/mypage/MyPage";
import FundingRegPage from "@/pages/funding/FundingRegPage";
import FundingRegInfoPage from "@/pages/funding/FundingRegInfoPage";
import RollingMainPage from "@/pages/celebration/rolling/RollingMainPage";
import RollingBackgroundPage from "@/pages/celebration/rolling/RollingBackgroundSelectPage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/celebrate" element={<CelebrationPage />} />
      <Route path="/celebrate/rolling" element={<RollingMainPage />} />
      <Route path="/celebrate/rolling-select" element={<RollingBackgroundPage />} />
      <Route path="/celebrate/funding" element={<FundingRegPage/>} />
      <Route path="/celebrate/funding-info" element={<FundingRegInfoPage/>} />
      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default HomeRouter;
