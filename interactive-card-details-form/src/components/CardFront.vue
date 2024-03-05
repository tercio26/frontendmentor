<template>
  <div class="card card-front">
    <div class="card-number">{{ $filters.formatCardNumber(cardStore.number) }}</div>
    <div class="d-flex justify-content-space-between mt-2 text-xs">
      <div class="card-holdername text-uppercase letter-spacing-0">{{ cardStore.name || 'Jane Appleseed' }}</div>
      <div class="card-exp-date letter-spacing-1">
        {{ cardStore.expMonth || '00' }} / {{ cardStore.expYear || '00' }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores, mapState } from 'pinia';
import { useCardStore } from '../stores/card.store.js';

export default {
  name: "CardFront",

  computed: {
    ...mapStores(useCardStore),
    ...mapState(useCardStore, ['name', 'number', 'expMonth', 'expYear', 'cvc']),
  }
}
</script>

<style scoped>

</style>