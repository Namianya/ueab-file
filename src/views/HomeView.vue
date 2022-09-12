<script setup>
import { getApp, getApps } from "@firebase/app";
import { useAuth } from '@vueuse/firebase/useAuth';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { ref } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoggedIn = ref(false);
const departments = ref([
  'School of Business',
  'School of Health Sciences',
  'School of Nursing',
  'School of Education, Humanities and Social Sciences',
  'School of Science and Technology',
]);
const isNotAlled = ref(false);

const app = getApps().length > 0 ? getApps()[0] : getApp();
console.log(app);
const auth = getAuth();
const { isAuthenticated, user } = useAuth(auth)
const signIn = () => {
  signInWithPopup(
    getAuth(app), new GoogleAuthProvider(),
  ).then((result)=>{
    if(result.user.email.endsWith('@ueab.ac.ke')){
      console.log('logged in');
      router.push('/admin');
      isLoggedIn.value = true;
    }
    else{
    isNotAlled.value = true;
      auth.signOut();
    }
  });

};

onAuthStateChanged(auth, user => {
  if (user) {
    // router.push('/table')
  } else {
    // router.push('/')
  }
})
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
      <p class="font-bold text-xl md:text-4xl mx-4">Welcome to UEAB</p>
      <p class="mb-8">This is UEAB File System.</p>
      <p v-if="isNotAlled" class="text-red-500">You are not authorised</p>
      <li @click="signIn" class="btn btn-primary">
        Log In to get started.
      </li>
    </div>
  </div>

</template>
