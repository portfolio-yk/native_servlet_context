import { SoundArg } from "../models/sound";
const playSound = (soundArg: SoundArg): Promise<boolean> => {
  console.log(soundArg.filePath);
  return new Promise((r) =>
    setTimeout(() => {
      console.log("소리 종료");
      r(true);
    }, 1000)
  );
};

const replaySound = (soundArg: SoundArg): Promise<boolean> => {
  console.log(soundArg.filePath);
  return new Promise((r) =>
    setTimeout(() => {
      console.log("소리 종료");
      r(true);
    }, 1000)
  );
};

const stopSound = () => {
  console.log("소리 멈춤");
  return true;
};
const cancelSound = () => {
  console.log("소리 종료");
  return true;
};

export default { playSound, replaySound, stopSound, cancelSound };
