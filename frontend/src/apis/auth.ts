import { authRequest } from "@utils/requestMethods";
import { userType } from "@/types/authType";
import { BASE_URL } from "@/utils/requestMethods";
import axios from "axios";

const JWT_EXPIRY_TIME = 3600 * 1000;

export const refresh = async () => {
  return authRequest
    .post("/auth/reissue")
    .then((res) => loginSuccess(res.data))
    .catch((err) => console.log(err));
};

// 로그인 성공 시
export const loginSuccess = async (res: { accessToken: string }) => {
  const { accessToken } = res;

  authRequest.defaults.headers.Authorization = `Bearer ${accessToken}`;
  setTimeout(() => refresh(), JWT_EXPIRY_TIME - 5000);
};

// 회원 정보 조회
export const fetchUserInfo = () => {
  let accessToken = localStorage.getItem("access_token");
  console.log("로컬 토큰", accessToken);
  return axios
    .get("/domain/users/me", {
      headers: {
        Authorization: `${accessToken}`,
      },
    })
    .then((res) => {
      console.log("get 요청 데이터", res.data);
      return res.data;
    })
    .catch((err) => console.error(err));
};
