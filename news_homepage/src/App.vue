<script setup>

import TheNavbar from "@/components/TheNavbar.vue";
import HomePage from "@/components/HomePage.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="container">
    <TheNavbar/>

    <main>
      <HomePage/>
    </main>

    <TheFooter/>
  </div>
</template>
