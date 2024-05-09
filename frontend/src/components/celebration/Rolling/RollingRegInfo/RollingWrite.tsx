import { colors } from "@styles/theme";
import Recg from "/img/img_recgPaper.png";
import Circle from "/img/img_circlePaper.png";
import ColorCard from "./ColorCard";
import * as r from "./RollingWrite.styled";
import { useState, useRef, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "@/stores/user";
import { createRollMsg } from "@/apis/roll";
import { LuPaintbrush } from "react-icons/lu";
import { TiScissors } from "react-icons/ti";

interface RegDataProps {
  shape: string;
  backgroundColor: string;
  backgroundImage: File | null;
  font: string;
  fontColor: string;
  content: string;
  nickname: string;
}

const shapeMap: { [key: string]: string } = {
  사각형: "RECTANGLE",
  원형: "CIRCLE",
};

const RollingWrite = () => {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const { eventId = "", pageUri = "" } = useParams<{
    pageUri?: string;
    eventId?: string;
  }>();

  const [regData, setRegData] = useState<RegDataProps>({
    shape: "RECTANGLE",
    backgroundColor: "",
    backgroundImage: null,
    content: "",
    font: "PRETENDARD",
    fontColor: "#00000",
    nickname: user.nickname || "",
  });

  const [backgroundType, setBackgroundType] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<string>("");
  const [saveModalOpen, setSaveModalOpen] = useState<boolean>(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const shapeList: string[] = ["사각형", "원형"];

  const onClickShape = (shape: string) => {
    const englishShape = shapeMap[shape];

    setRegData((prevData) => ({
      ...prevData,
      shape: englishShape,
    }));
  };

  const handleSelectColor = (color: string) => {
    setRegData((prevData) => ({
      ...prevData,
      backgroundColor: color,
      backgroundImage: null,
    }));
    setSelectedFile("");
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const fileURL = URL.createObjectURL(file);
      setSelectedFile(fileURL); // 이미지 url

      setRegData((prevData) => ({
        ...prevData,
        backgroundImage: file,
        backgroundColor: "",
      }));
      setBackgroundType("img");
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    setSaveModalOpen(false);

    const formData = new FormData();

    formData.append("shape", regData.shape);
    formData.append("backgroundColor", regData.backgroundColor);
    formData.append("content", regData.content);
    formData.append("font", regData.font);
    formData.append("nickname", regData.nickname);
    if (regData.backgroundImage) {
      formData.append("backgroundImage", regData.backgroundImage);
    }

    try {
      const res = await createRollMsg(formData, eventId);
      navigate(`/celebrate/rolling/${res.eventId}/${pageUri}`);
    } catch (err) {
      console.error(err);
    }
  };

  const [selectedColor, setSelectedColor] = useState<string>("black");
  const [selectedFont, setSelectedFont] = useState<string>("Pretendard");

  const colorList = [
    colors.black,
    colors.white,
    colors.blueFont,
    colors.orangeFont,
    colors.pinkFont,
    colors.greenFont,
    colors.yellowFont,
    colors.redFont,
  ];

  const handleSelectFontColor = (color: string) => {
    setSelectedColor(color);
    setRegData((prevData: any) => ({
      ...prevData,
      fontColor: color,
    }));
  };

  const handleSelectFont = (font: string) => {
    setSelectedFont(font);
    setRegData((prevData: any) => ({
      ...prevData,
      font: font,
    }));
  };

  const handleBack = () => {
    alert("작성한 내용이 저장되지 않습니다. 이 페이지를 떠나겠습니까?");
    window.history.back();
  };

  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [isShapeModalOpen, setIsShapeModalOpen] = useState(false);

  return (
    <>
      <r.Header>
        <r.Icon onClick={handleBack} />
        <span>메시지 작성하기</span>
      </r.Header>
      <r.Container>
        <r.SelectWrap>
          <div
            style={{ marginRight: "15px" }}
            onClick={() => setIsSelectModalOpen(true)}
          >
            <LuPaintbrush />
            <span>배경 선택</span>
          </div>
          <div onClick={() => setIsShapeModalOpen(true)}>
            <TiScissors />
            <span>종이 모양 선택</span>
          </div>
        </r.SelectWrap>
        <r.MessageBox
          id="content"
          font={selectedFont}
          $backColor={regData.backgroundColor}
          $backImage={selectedFile}
          placeholder="내용을 작성해주세요."
          style={{ color: regData.fontColor }}
          $shape={regData.shape}
          $type={backgroundType}
          value={regData.content}
          maxLength={300}
          onChange={(e) => {
            setRegData((prevData: any) => ({
              ...prevData,
              content: e.target.value,
            }));
          }}
        />
        <r.Label>작성자</r.Label>
        <r.Wrap>
          <r.WriterInfo
            value={regData.nickname}
            placeholder={user.nickname}
            maxLength={15}
            onChange={(e) =>
              setRegData((prevData) => ({
                ...prevData,
                nickname: e.target.value,
              }))
            }
          />
        </r.Wrap>
        <r.Label>글씨색</r.Label>
        <r.Wrap>
          {colorList.map((color) => (
            <r.ColorButton
              key={color}
              color={color}
              $isSelected={color === selectedColor}
              onClick={() => {
                {
                  handleSelectFontColor(color);
                }
              }}
            />
          ))}
        </r.Wrap>
        <r.Label>글씨체</r.Label>
        <r.Wrap>
          <r.PretendButton
            $isSelected={selectedFont === "PRETENDARD"}
            onClick={() => handleSelectFont("PRETENDARD")}
          >
            기본체
          </r.PretendButton>
          <r.GoocneaeumButton
            $isSelected={selectedFont === "GOOCNEAEUM"}
            onClick={() => handleSelectFont("GOOCNEAEUM")}
          >
            꽃내음체
          </r.GoocneaeumButton>
          <r.TreegardenButton
            $isSelected={selectedFont === "TREEGARDEN"}
            onClick={() => handleSelectFont("TREEGARDEN")}
          >
            나무정원체
          </r.TreegardenButton>
        </r.Wrap>
        <r.Wrap>
          {shapeList.map((shape) => (
            <r.ShapeButton
              key={shape}
              $isActive={regData.shape === shapeMap[shape]}
              onClick={() => onClickShape(shape)}
            >
              {shape === "사각형" ? (
                <r.Img src={Recg} alt={shape} />
              ) : (
                <r.Img src={Circle} alt={shape} />
              )}
              {shape}
            </r.ShapeButton>
          ))}
        </r.Wrap>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          name="img"
          id="img"
          onChange={handleFileInput}
          accept="image/*"
        />
        {isSelectModalOpen && (
          <>
            <r.BlackBox onClick={() => setIsSelectModalOpen(false)} />
            <r.ModalContainer>
              <r.P>배경 종류를 선택해주세요</r.P>
              <div style={{ display: "flex" }}>
                <button onClick={() => setBackgroundType("color")}>색깔</button>
                <button
                  onClick={() => {
                    setBackgroundType("img");
                    triggerFileInput();
                  }}
                >
                  사진
                </button>
              </div>
              {backgroundType === "color" && (
                <ColorCard
                  onColorSelect={(color: string) => {
                    handleSelectColor(color);
                    setIsSelectModalOpen(false);
                  }}
                />
              )}
              {backgroundType === "img" && selectedFile && (
                <img
                  src={selectedFile}
                  alt="미리보기"
                  style={{ width: "30%", height: "auto" }}
                ></img>
              )}
              <r.Backdrop>
                <img
                  src={"/icon/icon_close_black.png"}
                  alt="close"
                  onClick={() => setIsSelectModalOpen(false)}
                />
              </r.Backdrop>
            </r.ModalContainer>
          </>
        )}
        <r.Button onClick={() => setSaveModalOpen(true)}>저장하기</r.Button>
        {saveModalOpen && (
          <>
            <r.BlackBox onClick={() => setSaveModalOpen(false)} />
            <r.ModalContainer>
              <r.P>한 번 작성한 메시지는 삭제나 수정이 불가능합니다.</r.P>
              <r.P>정말 저장하시겠습니까?</r.P>
              <r.Button onClick={handleSubmit}>저장하기</r.Button>
              <r.Backdrop>
                <img
                  src={"/icon/icon_close_black.png"}
                  alt="close"
                  onClick={() => setSaveModalOpen(false)}
                />
              </r.Backdrop>
            </r.ModalContainer>
          </>
        )}
      </r.Container>
    </>
  );
};

export default RollingWrite;
