<script setup lang="ts">
import TheContents from "./TheContents.vue";
import { ethosForVue } from "../lib/EthosConnectProvider";
import { DetachedEthosConnectProvider } from "ethos-connect";
import { applyPureReactInVue } from "veaury";

const EthosConnectProvider = applyPureReactInVue(DetachedEthosConnectProvider);

const { context } = ethosForVue();
</script>

<template>
  <EthosConnectProvider :context="context">
    <TheContents />
  </EthosConnectProvider>
</template>
