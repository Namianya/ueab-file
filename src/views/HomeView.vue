<script setup>
import {ref} from "vue";
import SideNav from "../components/SideNav.vue";

const isLoggedIn = ref(false);
const departments = ref([
  'School of Business',
  'School of Health Sciences',
  'School of Nursing',
  'School of Education, Humanities and Social Sciences',
  'School of Science and Technology',
]);
</script>

<template>
  <div v-if="!isLoggedIn" class=" min-h-screen flex justify-center items-center text-center ">
    <div><p class="font-bold text-xl md:text-4xl mx-4">Welcome to UEAB</p>
      <p class="mb-8">This is UEAB File System.</p>
        <li @click="isLoggedIn=!isLoggedIn" class="btn btn-primary">
          <router-link to="/login">Login to get started</router-link>
        </li>
    </div>
  </div>
  <!-- <div class="min-h-screen p-4 md:px-10">
    <p>Welcome Paul!</p>
    <div>
      <p class="font-medium text-3xl mb-4">Departments</p>
      <SideNav/>
      <div>
        <p class="hover:text-primary duration-300 hover:font-medium hover:bg-blue-100 cursor-pointer rounded max-w-sm my-2 px-4 py-2"
           v-for="department in departments"
           :key="department">{{ department }}</p>
      </div>
    </div>
  </div> -->
</template>
