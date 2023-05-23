import { createApp } from "vue";
import App from "./App.vue";
import {
  EthosConnectPlugin,
  type EthosConfiguration,
  Chain,
} from "ethos-connect-vue";
import "./assets/main.css";

const config: EthosConfiguration = {
  apiKey: "8b6347aa-c5fb-460a-8fcc-efeb277f76fc",
  preferredWallets: ["Ethos Wallet"],
  chain: Chain.SUI_TESTNET,
};

createApp(App).use(EthosConnectPlugin, config).mount("#app");
