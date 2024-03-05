<template>
  <div class="border border-rounded border p-3">
    <div class="row justify-content-space-between">
      <div class="col-6 text-2xl text-bolder">
        ROCK<br/>
        PAPER<br/>
        SCISSORS<br/>
        LIZARD<br/>
        SPOCK
      </div>
      <div class="col-6">
        <div class="border-rounded bg-white text-center">
          <div class="text-uppercase text-primary">SCORE</div>
          <div class="text-muted text-2xl">{{ score }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameController",

  data() {
    return {
      score: 0
    }
  }
}
</script>

<style scoped>

</style>