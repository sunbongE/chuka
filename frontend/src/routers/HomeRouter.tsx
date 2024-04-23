import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import HomePage from "@pages/home/HomePage";
import CelebrationPage from "@/pages/celebration/CelebrationPage";
import AlarmPage from "@/pages/alarm/AlarmPage";
import MyPage from "@/pages/mypage/MyPage";


const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/celebrate" element={<CelebrationPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
};

export default HomeRouter;
