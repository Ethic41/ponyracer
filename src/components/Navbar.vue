/* Bismillahirrahmanirraheem Author: Dahir Muhammad Dahir Date: 12-December-2020 4:39 PM About: I will tell u later */
<template>
  <nav class="navbar navbar-expand-md navbar-light bg-dark">
    <RouterLink to="/" class="navbar-brand text-white">PonyRacer</RouterLink>
    <button type="button" class="navbar-toggler" @click="toggleNavbar()">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="navbar" class="navbar-collapse" :class="{ collapse: navbarCollapsed }">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <RouterLink to="/races" class="nav-link text-white-50">Races</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',

  setup() {
    const navbarCollapsed = ref(true);

    function toggleNavbar() {
      navbarCollapsed.value = !navbarCollapsed.value;
    }

    return {
      toggleNavbar,
      navbarCollapsed
    };
  }
});
</script>

<style scoped></style>
