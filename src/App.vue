<script setup lang="ts">
import TheApp from "./components/TheApp.vue";
import { EthosConnectProvider as EthosConnectProviderReact } from "ethos-connect";
import { applyPureReactInVue } from "veaury";

const EthosConnectProvider = applyPureReactInVue(EthosConnectProviderReact);
const ethosConfiguration = {
  apiKey: "ethos-connect-vue-example-app",
};
</script>

<template>
  <EthosConnectProvider :ethosConfiguration="ethosConfiguration">
    <TheApp />
  </EthosConnectProvider>
</template>
