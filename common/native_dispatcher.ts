import { native } from "@/common/utils/flutter_native";
import { App } from "vue";

export default {
  install: async (app: App) => {
    app.config.globalProperties.$native = native;
  },
};
