import { CameraCode } from "@/common/models/camera";
const openGallery = () => {
  return {
    code: CameraCode.SUCCESS,
    imageData: "",
  };
};
const openCamera = () => {
  return {
    code: CameraCode.SUCCESS,
    time: 123123,
    imageData: "",
    filePath: "",
  };
};

const openCameraPreview = (filePath: string) => {
  return true;
};

export default { openCamera, openGallery, openCameraPreview };
