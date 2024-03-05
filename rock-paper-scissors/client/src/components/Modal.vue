<template>
  <div class="modal" :class="{open: isOpen}" :id="id">
    <div class="modal-dialog">
      <div class="modal-header">
        <h5 class="modal-title">{{ title }}</h5>
        <button type="button" class="btn-close">
          <img src="/images/icon-close.svg" alt="Close" />
        </button>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    open: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<style scoped>

</style>