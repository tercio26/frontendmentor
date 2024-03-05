<template>

  <main>
    <div class="container">
      <GameController/>

      <GamePlay/>
    </div>

    <Rules/>

    <div class="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
      Coded by <a href="https://github.com/tercio26">Tercio</a>.
    </div>
  </main>
</template>

<script>
import GameController from '@/components/GameController.vue'
import GamePlay from '@/components/GamePlay.vue'
import Rules from '@/components/Rules.vue'

export default {
  name: "App",
  components: {
    GameController,
    GamePlay,
    Rules
  }
}
</script>
