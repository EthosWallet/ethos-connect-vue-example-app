import { createApp } from "vue";
import App from "./App.vue";
import {
  EthosConnectPlugin,
  EthosConfiguration,
} from "ethos-connect-vue-betax";
import "./assets/main.css";

const config: EthosConfiguration = {
  apiKey: "vue-example-app",
};

createApp(App).use(EthosConnectPlugin, config).mount("#app");
