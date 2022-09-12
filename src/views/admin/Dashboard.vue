<template>
    <div>
        <p class="font-bold text-2xl">Dashboard</p>

        
        <div>
            <ul>
                <li v-for="school in schools" :key="school">
                    <LandingButtons :buttonText="school" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import LandingButtons from '../../components/LandingButtons.vue';

    const schools = [
    'School of Business',
    'School of Health Sciences',
    'School of Nursing',
    'School of Education, Humanities and Social Sciences',
    'School of Science and Technology',
];
</script>