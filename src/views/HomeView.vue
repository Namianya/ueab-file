<script setup>
import { getApp, getApps } from "@firebase/app";
import { useAuth } from '@vueuse/firebase/useAuth';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { ref } from "vue";

const isLoggedIn = ref(false);
const departments = ref([
  'School of Business',
  'School of Health Sciences',
  'School of Nursing',
  'School of Education, Humanities and Social Sciences',
  'School of Science and Technology',
]);

const app = getApps().length > 0 ? getApps()[0] : getApp();
console.log(app);
const auth = getAuth();
const { isAuthenticated, user } = useAuth(auth)
const signIn = () => signInWithPopup(getAuth(app), new GoogleAuthProvider());
const signOut = () => auth.signOut();
</script>

<template>
  <pre v-if="isAuthenticated">User Object{{ user }}
  <div>
    <button @click="signOut" class="btn btn-error">Sign Out</button>
  </div>
  </pre>
  <div v-else class=" min-h-screen flex justify-center items-center text-center ">
    <div>
      <button @click="signIn">
        Sign In with Google
      </button>
      <p class="font-bold text-xl md:text-4xl mx-4">Welcome to UEAB</p>
      <p class="mb-8">This is UEAB File System.</p>
      <li @click="signIn" class="btn btn-primary">
        Login to get started.
      </li>
    </div>
  </div>

</template>
