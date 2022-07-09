<script setup>
import {RouterLink, RouterView} from 'vue-router'
import NavBar from "./components/NavBar.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <header>
    <div>
      <NavBar/>
    </div>
  </header>
  <RouterView/>
  <FooterComponent/>
</template>

<style>


</style>
