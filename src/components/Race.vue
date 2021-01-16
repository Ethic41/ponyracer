/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 13-December-2020 1:05 PM About: I will tell u later */
<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ startInstant }}</p>
    <div class="row">
      <div class="col" v-for="pony in ponies" :key="pony.id">
        <Pony :ponyModel="pony"></Pony>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType, computed } from 'vue';
import { RaceModel } from '@/models/RaceModel';
import Pony from '@/components/Pony.vue';
import fromNow from '@/utils/FromNow';

export default defineComponent({
  name: 'Race',

  components: {
    Pony
  },

  props: {
    raceModel: {
      type: Object as PropType<RaceModel>,
      required: true
    }
  },

  setup(props) {
    /* destructuring the raceModel to access fields directly */

    const startInstant = computed(() => fromNow(props.raceModel.startInstant));

    return { ...toRefs(props.raceModel), startInstant };
  }
});
</script>

<style scoped></style>
