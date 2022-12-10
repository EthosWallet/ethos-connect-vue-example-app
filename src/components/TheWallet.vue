<script setup lang="ts">
import { ethosForVue } from "@/lib/EthosConnectProvider";

const {
  context: {
    wallet: { wallet },
  },
} = ethosForVue();
</script>

<template>
  <div v-if="!!wallet" className="main">
    <div className="wallet-name">
      <img :src="wallet.icon" />
      {{ wallet.name }}
    </div>
  </div>
</template>
