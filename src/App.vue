<script setup lang="ts">
import { applyPureReactInVue } from "veaury";
import { EthosConnectVueProvider } from "./lib/EthosConnectProvider";

import TheApp from "./components/TheApp.vue";

const EthosConnectProvider = applyPureReactInVue(EthosConnectVueProvider);
</script>

<template>
  <EthosConnectProvider>
    <div className="app">
      <TheApp />
    </div>
  </EthosConnectProvider>
</template>
