<script setup lang="ts">
import { ethosForVue } from "ethos-connect-vue-betax";

const { context } = ethosForVue() || {};
const { wallet } = context?.wallet || {};

const mint = () => {
  if (!wallet) return;

  wallet.signAndExecuteTransaction({
    kind: "moveCall",
    data: {
      packageObjectId: "0x0000000000000000000000000000000000000002",
      module: "devnet_nft",
      function: "mint",
      typeArguments: [],
      arguments: [
        "Ethos Example NFT",
        "A sample NFT from Ethos Wallet.",
        "https://ethoswallet.xyz/assets/images/ethos-email-logo.png",
      ],
      gasBudget: 10000,
    },
  });
};
</script>

<template>
  <div v-if="!!wallet" className="main">
    <div className="wallet-name">
      <img :src="wallet.icon" />
      {{ wallet.name }}
    </div>
    <div v-if="!!wallet.contents" className="wallet-balance">
      Balance: {{ wallet.contents.suiBalance }} MIST
    </div>
    <div v-if="!!wallet.contents?.nfts && wallet.contents.nfts.length > 0">
      <div className="subtitle">NFT From Wallet:</div>
      <div>
        <img
          :src="wallet.contents.nfts[wallet.contents.nfts.length - 1].imageUri"
          className="nft"
          height="300"
          width="300"
        />
      </div>
    </div>
    <div>
      <button :onClick="mint" className="button">Mint A New NFT</button>
    </div>
  </div>
</template>
