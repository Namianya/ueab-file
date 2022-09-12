<template>
  <div>
    <div>
      <p class="text-xl font-bold">Students <span class="text-primary">Details</span></p>
    </div>
    <div class="flex justify-between">
      <div class="border rounded p-8 flex flex-col gap-2">
        <p class="text-center">Student Details</p>
        <div>
          <p class="capitalize font-medium text-slate-600">
            Student ID:
            <span class="uppercase text-slate-900 text-md font-semibold underline"
              >ksdu2j32</span
            >
          </p>
          <div>
            <p class="capitalize font-medium text-slate-600">
              Last Name:
              <span class="uppercase text-slate-900 text-md font-semibold underline"
                >ksdu2j32</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              First Name:
              <span class="uppercase text-slate-900 text-md font-semibold underline"
                >ksdu2j32</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              middle Name:
              <span class="uppercase text-slate-900 text-md font-semibold underline"
                >ksdu2j32</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              Status:
              <span class="uppercase text-slate-900 text-md font-semibold underline"
                >ksdu2j32</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              Location:
              <span class="uppercase text-slate-900 text-md font-semibold underline"
                >ksdu2j32</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="border rounded p-8">
        <p class="text-center font-bold">Forms</p>
        <div>
          <p class="capitalize font-medium text-slate-600">
            KCPE Certificate:
            <span class="uppercase text-md font-semibold underline text-green-500"
              >Yes</span
            >
          </p>
        </div>
        <div>
          <p class="capitalize font-medium text-slate-600">
            KCSE Certificate:
            <span class="uppercase text-md font-semibold underline text-red-500">No</span>
          </p>
        </div>
        <div>
          <p class="capitalize font-medium text-slate-600">
            KCPE Certificate:
            <span class="uppercase text-md font-semibold underline text-green-500"
              >Yes</span
            >
          </p>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary mt-4">Go Back</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getStudents } from "../firebaseFuctions/getStudents";
const { students, gettingData, addStudent, getAllStudents, student } = getStudents();
getAllStudents();
</script>
