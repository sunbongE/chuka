import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import * as b from "./Banner.styeld";
import TestImg from "/img/img_main_banner.png";
import { IoMdSettings } from "react-icons/io";
import { fetchEventInfo } from "@/apis/event";

interface EventInfo {
  title: string;
  date: string;
  banner: string;
  user_id: string;
}

const Banner = () => {
  const { eventId } = useParams();

  const navigate = useNavigate();
  const [values, setValues] = useState<EventInfo | null>(null);
  const [bannerImgURL, setBannerImgURL] = useState();

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        if (eventId) {
          const eventInfo = await fetchEventInfo(eventId);
          setValues(eventInfo);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchInfo();
  }, [eventId]);

  if (!values) {
    return <p>Loading...</p>;
  }

  const bannerImg = values.banner ? values.banner : TestImg;

  return (
    <>
      <b.Wrap>
        <b.Banner src={bannerImg} />
        <b.Title>
          {values.title}
          {/* <IoMdSettings onClick={() => navigate("/celebrate")} /> */}
        </b.Title>
        <b.Name>{values.user_id}</b.Name>
        <b.Dday>{values.date}</b.Dday>
      </b.Wrap>
    </>
  );
};

export default Banner;
