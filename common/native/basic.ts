const exitApp = (): string => {
  return "success";
};
let i = 0.001;
let j = 0.0005;
const getMyPosition = () => {
  const po = [126.790604750958 + i, 37.5018271521271 + j];
  i += 0.0002;
  j += 0.0001;
  return po;
};

const checkNetwork = () => {
  return true;
};

const requestPermissions = () => {
  return true;
};

const getPermissionStatus = () => {
  return { locationAlways: true };
};

const getDeviceId = () => {
  return 123;
};

const getAppVersion = () => {
  return "0.0.0";
};

const fileDownload = () => {
  return {
    result: "DOWNLOADING",
  };
};

const showToastMessage = (message: string): void => {
  alert(message);
};

const turnOnResize = (): void => {};

const turnOffResize = (): void => {};

const getContentsVersion = (): string => {
  return "1.0.0";
};

const setCurrentPage = () => {
  return "";
};

const mailto = (email: string) => {
  console.log(email);
  return "";
};

const sendFile = (param: any) => {
  return true;
};

export default {
  exitApp,
  getMyPosition,
  checkNetwork,
  requestPermissions,
  getDeviceId,
  fileDownload,
  showToastMessage,
  turnOnResize,
  turnOffResize,
  getContentsVersion,
  setCurrentPage,
  mailto,
  sendFile,
  getAppVersion,
  getPermissionStatus,
};
