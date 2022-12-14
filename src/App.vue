<script setup lang="ts">
import TheContents from "./components/TheContents.vue";
</script>

<template>
  <EthosConnectProvider>
    <EthosConnectBase>
      <div className="app">
        <TheContents />
      </div>
    </EthosConnectBase>
  </EthosConnectProvider>
</template>
