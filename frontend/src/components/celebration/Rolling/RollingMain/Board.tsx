import CorkBoard from "/img/img_rolling_theme_cork.jpg";
import BlackBoard from "/img/img_rolling_theme_board.jpg";
import Drawer from "@components/drawer";
import RModal from "@common/responsiveModal";
import FundingModal from "./FundingModal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { fetchEventInfo } from "@/apis/event";
import { fetchRollSheets } from "@/apis/roll";
import * as b from "./Board.styled";

interface MessageProps {
  nickname: string;
  content: string;
  backgroundImageThumbnailUrl?: string;
  backgroundColor?: string;
  font: string;
  fontColor: string;
  shape: string;
  rollSheetId: string;
}

const Board = () => {
  const navigate = useNavigate();
  const { eventId, pageUri } = useParams<{
    pageUri: string;
    eventId: string;
  }>();

  const [values, setValues] = useState<{ theme: string }>();
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [rolls, setRolls] = useState<MessageProps[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const prevUrl = window.location.href;
  const accessToken = localStorage.getItem("access_token");

  const goFunding = () => {
    sessionStorage.setItem("prevUrl", prevUrl);
    console.log('여기에요 전 !!!!!!!!!!',values);
    if (accessToken) {
      setDrawerOpen(!isDrawerOpen);
    } else {
      setIsModalOpen(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (typeof eventId === "string") {
        try {
          const eventInfo = await fetchEventInfo(eventId);
          setValues(eventInfo);
          console.log('여기야 !!!!!!!!!!!!', eventInfo);
        } catch (err) {
          console.error(err);
        }
        try {
          const RollList = await fetchRollSheets(
            eventId,
            currentPage,
            6,
          );
          console.log("롤리스트", RollList);

          if (RollList && RollList.length > 0) {
            setRolls(RollList);
            
          }
          console.log("values", rolls);
        } catch (err) {
          console.error(err);
        }
      } else {
        console.error("eventId 이상");
      }
    };

    fetchData();
  }, [eventId, currentPage]);

  useEffect(() => {
    console.log("Updated rolls:", rolls);
  }, [rolls]);

  const Theme = values
    ? values.theme === "CORK_BOARD"
      ? CorkBoard
      : BlackBoard
    : CorkBoard;

  return (
    <>
      <b.Container>
        {!rolls && <b.P>롤링페이퍼를 작성해주세요.</b.P>}
        {rolls.map((roll) => (
          <b.MessageCard
            key={roll.rollSheetId}
            $bgColor={roll.backgroundColor}
            $font={roll.font}
            $fontColor={roll.fontColor}
            $bgImage={roll.backgroundImageThumbnailUrl}
            $shape={roll.shape}
            onClick={() => navigate(`/`)}
          >
            {roll.content}
            {roll.nickname}
          </b.MessageCard>
        ))}
        <b.RollingTheme src={Theme} alt="theme" />
        <b.Button onClick={goFunding}>선물펀딩확인하기</b.Button>
      </b.Container>
      <Drawer isOpen={isDrawerOpen} eventId={values?.eventId} onClose={() => setDrawerOpen(false)} />
      
      {isModalOpen && (
        <RModal
          name={"선물 펀딩 서비스 이용 동의"}
          onClose={() => setIsModalOpen(false)}
        >
          <FundingModal setIsModalOpen={setIsModalOpen} />
        </RModal>
      )}
    </>
  );
};

export default Board;
