<template>
  <div class="container" style="margin-top: 70px">
    <Navbar></Navbar>
    <RouterView v-slot="{ Component }">
      <Alert v-if="errorMessage" dismissible>An error occurred while loading.</Alert>
      <Suspense v-else timeout="0">
        <component :is="Component" />
        <template #fallback>Loading...</template>
      </Suspense>
    </RouterView>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue';
import Races from '@/views/Races.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
  name: 'App',

  components: {
    Races,
    Navbar
  },

  setup() {
    const errorMessage = ref<string | null>(null);

    onErrorCaptured(() => {
      //errorMessage.value = (e as Error).message;
      errorMessage.value = 'error';
      return false;
    });

    return {
      errorMessage
    };
  }
});
</script>

<style>
/* fresh new file */
@import '~bootstrap/dist/css/bootstrap.min.css';
@import '~font-awesome/css/font-awesome.min.css';
</style>
