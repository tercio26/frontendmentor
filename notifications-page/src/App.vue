<template>
  <main>
    <div class="container">
      <NotificationsPanel/>

      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/tercio26">Tercio</a>.
      </div>
    </div>
  </main>
</template>

<script >
import NotificationsPanel from "@/components/NotificationsPanel.vue";
export default {
  name: "App",
  components: {
    NotificationsPanel
  }
}
</script>
