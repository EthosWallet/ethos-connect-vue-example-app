<script setup lang="ts">
import { EthosConnectStatus } from "ethos-connect";
import { ethosForVue } from "@/lib/EthosConnectProvider";

const {
  value: { wallet },
} = ethosForVue();
const { status } = wallet;
</script>

<template>
  <div v-if="status === EthosConnectStatus.Connected">
    <div>Connected Wallet</div>
  </div>
  <div>{{ status }}</div>
</template>
