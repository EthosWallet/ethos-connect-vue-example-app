<script setup lang="ts">
import TheContents from "./TheContents.vue";
import { ethosForVue } from "../lib/EthosConnectProvider";
import { EthosConnectProviderForVue } from "ethos-connect";
import { applyPureReactInVue } from "veaury";

const EthosConnectProvider = applyPureReactInVue(EthosConnectProviderForVue);

const { context } = ethosForVue();
</script>

<template>
  <EthosConnectProvider :context="context">
    <TheContents />
  </EthosConnectProvider>
</template>
