<script setup lang="ts">
import TheHeaderVue from "./TheHeader.vue";
import TheWallet from "./TheWallet.vue";
import { ethosForVue } from "../lib/EthosConnectProvider";
import { EthosConnectProviderForVue } from "ethos-connect";
import { applyPureReactInVue } from "veaury";

const EthosConnectProvider = applyPureReactInVue(EthosConnectProviderForVue);

const { value } = ethosForVue();
</script>

<template>
  <EthosConnectProvider :context="value">
    <TheHeaderVue />
    <TheWallet />
  </EthosConnectProvider>
</template>
