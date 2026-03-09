import { alarmConfig } from "../models/alarm";

const turnOnAlarm = async (alarmConfig: alarmConfig): Promise<boolean> => {
  return new Promise((r) => {
    console.log(alarmConfig.title, alarmConfig.message);
    console.log(alarmConfig.hour, alarmConfig.minute);
    r(true);
  });
};

const turnOffAlarm = () => {
  return false;
};

export default { turnOnAlarm, turnOffAlarm };
