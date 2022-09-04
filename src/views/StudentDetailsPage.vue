
<template>
    <div>
        <div>
            <p class="text-xl font-bold">Students <span class="text-primary">Details</span></p>
        </div>
        <div class="grid grid-cols-2 gap-2">
        <input type="text" v-model="student.id" class="rounded" placeholder="Student Id">
        <input type="text" v-model="student.name" class="rounded" placeholder="Student name">
        <input type="text" v-model="student.age" class="rounded" placeholder="Student age">
        <input type="text" v-model="student.school" class="rounded" placeholder="Student School">
        </div>
        <div @click="addStudent" class="btn btn-ghost">Add to firebase</div>
        <div v-if="gettingData">loading the student data</div>
        <div v-else  v-for="student in students" :key="student.id">
           Name {{ student.name }} - ID:{{ student.id }}- age:{{ student.age }}
        </div>
    </div>
</template>
<script setup lang="ts">
   import{getStudents} from "../firebaseFuctions/getStudents"
   const {students,gettingData,addStudent,getAllStudents, student} = getStudents()
   getAllStudents()

</script>
