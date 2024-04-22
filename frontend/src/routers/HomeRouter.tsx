import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import RollingCreatePage from "@/pages/rolling/RollingCreatePage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/make-chuka" element={<RollingCreatePage />} />
    </Routes>
  );
};

export default HomeRouter;
