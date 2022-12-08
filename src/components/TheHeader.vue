<script setup lang="ts">
import { ethos as ethos } from "ethos-connect";
import { applyPureReactInVue } from "veaury";

const addressWidget = applyPureReactInVue(ethos.components.AddressWidget);
</script>

<template>
  <div className="header">
    <div>Ethos Connect Vue Example App</div>
    <addressWidget />
  </div>
</template>
