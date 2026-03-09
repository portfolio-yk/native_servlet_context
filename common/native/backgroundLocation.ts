import { Position } from "@/common/models/native";

const startBackgroundLocationService = ({
  title,
  contents,
}: {
  title: string;
  contents: string;
}): void => {
  console.log(title, contents);
  return;
};

const getMyBackgroundLocation = (): Position => {
  return [126.7898622, 37.5004312] as Position;
};

const stopBackgroundLocationService = (): void => {
  return;
};

export {
  startBackgroundLocationService,
  getMyBackgroundLocation,
  stopBackgroundLocationService,
};
