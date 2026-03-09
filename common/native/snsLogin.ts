import { User } from "@/common/models/user";
const getLoginInfo = ({ type }: User) => {
  return {
    code: "SNS_SUCCESS",
    token:
      "wDIqWAzJayhg5r5H4y45nesZg8QMRqgTJ1YaSW9sCisNIAAAAYdu4WS_",
    snsType: "KAKAO",
    user: {
      email: "rlaguswls0804@naver.com",
      nickname: "gg",
      id: "ddd",
    },
  };
};

const expireLoginInfo = () => {
  return true;
};

export default { getLoginInfo, expireLoginInfo };
