<template>
  <main>
    <div class="banner">
      <div class="container">
        <CardFront/>
        <CardBack/>
      </div>
    </div>

    <div class="card-form">
      <div class="container">
        <component :is="activeStep"></component>

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="https://github.com/tercio26">Tercio</a>.
        </div>
      </div>
    </div>

  </main>
</template>

<script>
import CardFront from "@/components/CardFront.vue";
import CardBack from "@/components/CardBack.vue";
import CardForm from "@/components/CardForm.vue";
import Completed from "@/components/Completed.vue";
import { useCardStore } from '@/stores/card.store.js';
import {mapStores, mapState} from 'pinia';
import constants from "@/constants.js";

export default {
  name: "App",
  components: {CardBack, CardFront, CardForm, Completed},
  data() {
    return {

    }
  },
  watch: {

  },
  computed: {
    ...mapState(useCardStore, ['step']),
    ...mapStores(useCardStore),
    activeStep() {
      switch (this.cardStore.step) {
        case constants.step.FORM: return 'CardForm';
        case constants.step.COMPLETE: return 'Completed';
        default: return 'CardForm';
      }
    }
  },
  methods: {

  }
}
</script>
