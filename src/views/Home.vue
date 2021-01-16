/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 19-December-2020 11:09 AM About: I will tell u later */
<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>
    <div>
      <RouterLink :to="{ name: 'login' }" class="btn btn-primary mt-4">Login</RouterLink>
    </div>
    <div>
      <RouterLink :to="{ name: 'register' }" class="btn btn-primary mt-4">Register</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped></style>
