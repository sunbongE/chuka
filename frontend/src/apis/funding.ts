import { BASE_URL, authRequest } from "@utils/requestMethods";
import { RegDataType } from "@/components/funding/FundingRegInfo";
import { PayDataType } from "@/components/payment/index.tsx";
import axios from "axios";

const url = `/domain`;
// const url = `https://chuka.kr/api/v1`

// 펀딩 생성
export const createFunding = async (params: RegDataType) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.post(`${url}/fundings`, params, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 이벤트에 해당하는 펀딩 목록 조회
export const fetchFundings = async (eventId: string) => {
  try {
    const response = await axios.get(`${url}/fundings/events/${eventId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// 나의 펀딩 조회
export const fetchMyFundings = async () => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.get(`${url}/fundings/me`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// 펀딩 단건 조회
export const fetchFunding = async (fundingId: number) => {
  try {
    const response = await axios.get(`${url}/fundings/${fundingId}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

// 펀딩 참여
export const joinFunding = async (params: PayDataType) => {
  const accessToken = localStorage.getItem("access_token");
  try {
    const response = await axios.post(`${url}/fundings/test`, params, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};