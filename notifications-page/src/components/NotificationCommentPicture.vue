<template>
  <div class="mt-2 bg-light text-sm border-rounded p-3 row notification" :class="{
    'unread': !notification.isRead
  }">
    <img :src="notification.from.avatar" class="thumbnail img-responsive" alt=""/>

    <div class="flex-0">
      <p class="notification-description mb-1">
        <span class="text-bold text-dark text-hover-primary">{{ notification.from.name }}</span> commented on your picture
      </p>
      <div class="text-muted">{{ notification.createdAt }}</div>
    </div>
    <img :src="notification.destination.content" class="thumbnail img-responsive" alt=""/>

  </div>
</template>

<script>
export default {
  name: "NotificationCommentPicture",

  props: {
    notification: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>