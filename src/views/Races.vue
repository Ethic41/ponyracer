/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 13-December-2020 6:36 AM About: I will tell u later */

<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race"></Race>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Race from '@/components/Race.vue';
import { RaceModel } from '@/models/RaceModel';
import { useRaceService } from '@/composables/RaceService';

export default defineComponent({
  name: 'Races',

  components: {
    Race
  },

  async setup() {
    const raceServices = useRaceService();
    const races = ref<Array<RaceModel> | null>(null);

    races.value = await raceServices.list();

    return {
      races
    };
  }
});
</script>

<style scoped></style>
