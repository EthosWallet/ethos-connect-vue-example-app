<script setup lang="ts">
import { ethosForVue } from "../lib/EthosConnectProvider";
import { applyPureReactInVue } from "veaury";
import { ethos } from "ethos-connect";

const AddressWidget = applyPureReactInVue(ethos.components.AddressWidget);

const { value } = ethosForVue();
</script>

<template>
  <div className="header">
    <div>Ethos Connect Vue Example App</div>
    <AddressWidget :externalContext="value" />
  </div>
</template>
