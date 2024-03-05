<template>
  <!-- Completed state start -->
  <div class="text-center">
    <img src="/assets/images/icon-complete.svg" class="img-responsive mb-4" alt="Thank You!"/>

    <h3 class="text-uppercase text-2xl letter-spacing-2 text-dark mb-3">Thank you!</h3>

    <div class="text-muted">We've added your card details</div>

    <button class="btn btn-dark mt-4 btn-block" @click="complete">Continue</button>
  </div>
  <!-- Completed state end -->
</template>

<script>
import {mapStores, mapActions} from 'pinia';
import {useCardStore} from '@/stores/card.store.js';
export default {
  name: "Completed",

  methods: {
    complete(values) {
      this.cardStore.completeCard();
    },
    ...mapActions(useCardStore, ['completeCard']),
  },

  computed: {
    ...mapStores(useCardStore),
  }
}
</script>

<style scoped>

</style>