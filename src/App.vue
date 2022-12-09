<script setup lang="ts">
import { applyPureReactInVue } from "veaury";
import {
  EthosConnectVueProvider,
  VueMissReact,
} from "./lib/EthosConnectProvider";

import TheApp from "./components/TheApp.vue";

const EthosConnectProvider = applyPureReactInVue(EthosConnectVueProvider);
const VueMiss = VueMissReact;
</script>

<template>
  <EthosConnectProvider>
    <VueMiss>
      <TheApp />
    </VueMiss>
  </EthosConnectProvider>
</template>
