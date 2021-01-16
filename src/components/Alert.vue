/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 16-December-2020 7:50 AM About: I will tell u later */
<template>
  <div :class="alertClass">
    <slot></slot>
    <button v-if="isDismissible" @click="dismiss()" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&#215;</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'Alert',

  props: {
    dismissible: {
      type: Boolean
    },

    variant: {
      type: String,
      default: 'danger'
    }
  },

  emits: ['dismissed'],

  setup(props, { emit }) {
    const isDismissible = computed(() => props.dismissible);

    const alertClass = computed(() => `alert alert-${props.variant}`);

    function dismiss() {
      emit('dismissed');
    }

    return { isDismissible, dismiss, alertClass };
  }
});
</script>

<style scoped></style>
