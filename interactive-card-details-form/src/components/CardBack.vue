<template>
  <div class="card card-back">
    <div class="card-cvc">{{ cardStore.cvc || '000' }}</div>
  </div>
</template>

<script>
import { mapStores, mapState } from 'pinia';
import { useCardStore } from '../stores/card.store.js';

export default {
  name: "CardBack",

  computed: {
    ...mapStores(useCardStore),
    ...mapState(useCardStore, ['name', 'number', 'expMonth', 'expYear', 'cvc']),
  }
}
</script>

<style scoped>

</style>