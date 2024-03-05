<template>
  <a class="btn btn-outline border-rounded" @click="isOpen = true">RULES</a>

  <Modal id="modal-rules" title="Rules" :open="isOpen">
    <img src="/images/image-rules-bonus.svg" alt="Rules"/>
  </Modal>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
  name: "Rules",
  components: {
    Modal
  },
  data() {
    return {
      isOpen: false
    }
  }
}
</script>
