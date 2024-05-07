import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "@/stores/user";
import * as h from "./HomePage.styled";
import Navbar from "@common/navbar";
import HomeHeader from "@components/home/HomeHeader/";
import HomeIntro from "@components/home/HomeIntro";
import HomeEventReg from "@components/home/HomeReg";
import HomeEventList from "@components/home/HomeEventList";
import HomeReview from "@components/home/HomeReview";
import { handleAllowNotification } from "@/services/notificationPermission";

const HomePage = () => {
  const user = useRecoilValue(userState);
  console.log("user", user);

  useEffect(() => {
    const notificationTimeout = setTimeout(() => {
      handleAllowNotification();
    }, 3000); // 10초 후에 실행

    return () => clearTimeout(notificationTimeout);
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  return (
    <>
      <h.Wrap>
        <HomeHeader />
        <HomeIntro />
        <HomeEventReg />
        <HomeEventList />
        <HomeReview />
      </h.Wrap>
      <h.Img src="/img/img_main_banner.png" alt="" />
      <Navbar current={"home"} />
    </>
  );
};

export default HomePage;
