import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/login/LoginPage";

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default HomeRouter;
