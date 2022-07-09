<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
   
    <div>

      <navn class="flex w-full justify-between">
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <p>Hello</p>
        <p>world</p>
      </navn>
    </div>
  </header>

  <RouterView />
</template>

<style>



</style>
