import { ethos } from "ethos-connect";
import {
  applyPureReactInVue,
  createCrossingProviderForVueInReact,
} from "veaury";

const ethosConfiguration = {
  apiKey: "ethos-connect-vue-example-app",
};

const [ethosForVue, EthosConnectVueProvider] =
  createCrossingProviderForVueInReact(() => ({
    value: ethos.useValue(ethosConfiguration, () => {}),
  }));

const VueMissReact = applyPureReactInVue(EthosConnectVueProvider);

export { ethosForVue, EthosConnectVueProvider, VueMissReact };
