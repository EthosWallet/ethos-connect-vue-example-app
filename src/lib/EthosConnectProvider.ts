import { ethos } from "ethos-connect";
import { createCrossingProviderForVueInReact } from "veaury";

const ethosConfiguration = {
  apiKey: "ethos-connect-vue-example-app",
};

const [ethosForVue, EthosConnectVueProvider] =
  createCrossingProviderForVueInReact(() => ({
    context: ethos.useContext({ ethosConfiguration }),
  }));

export { ethosForVue, EthosConnectVueProvider };
