import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";
import HomePage from "@/pages/home/HomePage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default HomeRouter;
