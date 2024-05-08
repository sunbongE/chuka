import { BASE_URL, authRequest } from "@utils/requestMethods";
import axios from "axios";
import { myEventListType } from "@/types/eventType";

const url = `https://chuka.kr/api/v1`;
const local = "/domain";

// 이벤트 등록
export const createEventReg = async (formdata: any) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.post(`${local}/events`, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// 이벤트 단건 정보 조회
export const fetchEventInfo = async (eventId: string): Promise<any> => {
  try {
    const response = await axios.get(`${local}/events/${eventId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 이벤트, 축하메시지 갯수 조회
export const fetchCount = async () => {
  try {
    const response = await axios.get(`${local}/events/count`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 이벤트 목록 조회
export const fetchList = async (asc: boolean, page: number, size: number) => {
  try {
    const response = await axios.get(`/domain/events`, {
      params: {
        asc,
        page,
        size,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 내 이벤트 조회
export const fetchMyEventList = async (params: myEventListType) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.get(`${local}/events/me`, {
      headers: { Authorization: `${accessToken}` },
      params: params,
    });
    console.log("내 이벤트", response.data);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};
