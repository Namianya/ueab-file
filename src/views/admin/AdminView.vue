<template>
  <div class="flex min-h-full gap-4">
    <ul class="menu bg-base-100 w-56 rounded-box">
      <li><RouterLink :to="{ name: 'dashboard' }">Dashboard</RouterLink></li>
      <li><RouterLink :to="{ name: 'recentActivity' }">Recent Activity</RouterLink></li>
      <li><RouterLink :to="{ name: 'users' }">View Users</RouterLink></li>
      <li><RouterLink :to="{ name: 'admins' }">View Admin</RouterLink></li>
      <li><RouterLink :to="{ name: 'getreports' }">Get reports</RouterLink></li>
    </ul>
    <div class="w-full"><RouterView /></div>
  </div>
</template>
<script setup lang="ts"></script>
<style>

</style>
