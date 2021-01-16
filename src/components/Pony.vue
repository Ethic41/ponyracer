/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 14-December-2020 10:18 PM About: I will tell u later */
<template>
  <figure @click="clicked()">
    <img :src="ponyImageUrl" :alt="name" />
    <figcaption>{{ name }}</figcaption>
  </figure>
</template>

<script lang="ts">
import { defineComponent, computed, PropType, toRefs } from 'vue';
import { PonyModel } from '@/models/PonyModel';
import { getPonyImageUrl } from '@/utils/PonyImageUrl';

export default defineComponent({
  name: 'Pony',

  props: {
    ponyModel: {
      type: Object as PropType<PonyModel>,
      required: true
    }
  },

  emits: ['ponySelected'],

  setup(props, { emit }) {
    const ponyImageUrl = computed(() => getPonyImageUrl(props.ponyModel));

    function clicked() {
      emit('ponySelected');
    }

    return { ...toRefs(props.ponyModel), ponyImageUrl, clicked };
  }
});
</script>

<style scoped>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}

img {
  height: 50px;
}
</style>
