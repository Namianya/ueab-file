<template>
  <div>
    <div>
      <p class="text-xl font-bold">Add <span class="text-primary">File</span></p>
    </div>

    <div class="flex justify-between">
      <div class="border rounded p-8 flex flex-col gap-2">
        <p class="text-center">Fill the fillowing forms</p>
        <div class="font-medium flex flex-col gap-1">
          <div class="flex items-center gap-4">
            <p class="capitalize">Student ID:</p>
            <input class="rounded" type="text" />
          </div>
          <div class="flex items-center gap-4">
            <p class="capitalize">Student ID:</p>
            <input class="rounded" type="text" />
          </div>
          <div class="flex items-center gap-4">
            <p class="capitalize">Student ID:</p>
            <input class="rounded" type="text" />
          </div>
          <div class="flex items-center gap-4">
            <p class="capitalize">Student ID:</p>
            <input class="rounded" type="text" />
          </div>
          <div class="flex items-center gap-4">
            <p class="capitalize">Student ID:</p>
            <input class="rounded" type="text" />
          </div>
        </div>
      </div>
      <div class="border rounded p-8">
        <p class="text-center font-bold">Forms</p>
        <div class="form-control flex flex-row items-center gap-2">
          <label class="cursor-pointer label">
            <span class="label-text">KCPE Certificate</span>
          </label>
          <input type="checkbox" checked class="checkbox checkbox-primary" />
        </div>
        <div class="form-control flex flex-row items-center gap-2">
          <label class="cursor-pointer label">
            <span class="label-text">KCPE Certificate</span>
          </label>
          <input type="checkbox"  class="checkbox checkbox-primary" />
        </div>
        <div class="form-control flex flex-row items-center gap-2">
          <label class="cursor-pointer label">
            <span class="label-text">KCPE Certificate</span>
          </label>
          <input type="checkbox"  class="checkbox checkbox-primary" />
        </div>
        <div class="form-control flex flex-row items-center gap-2">
          <label class="cursor-pointer label">
            <span class="label-text">KCPE Certificate</span>
          </label>
          <input type="checkbox"  class="checkbox checkbox-primary" />
        </div>
        <div class="form-control flex flex-row items-center gap-2">
          <label class="cursor-pointer label">
            <span class="label-text">KCPE Certificate</span>
          </label>
          <input type="checkbox"  class="checkbox checkbox-primary" />
        </div>


        <!-- <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">KCPE Certificate </span>
            <input type="radio" name="radio-6" class="radio checked:bg-primary" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">KCSE Certificate </span>
            <input type="radio" name="radio-6" class="radio checked:bg-primary" checked />
          </label>
        </div>
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">KCPE Certificate </span>
            <input type="radio" name="radio-6" class="radio checked:bg-primary" checked />
          </label>
        </div>  
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">KCPE Certificate </span>
            <input
              type="radio"
              name="radio-6"
              class="radio checked:bg-primary"
              checked
            />
          </label>
        </div> -->
      </div>
    </div>
    <div class="flex justify-end w-full gap-2">
      <button class="btn btn-primary mt-4">Go Back</button>
      <button class="btn btn-primary mt-4">Go Back</button>
      <button class="btn btn-primary mt-4">Go Back</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getStudents } from "../firebaseFuctions/getStudents";
const { students, gettingData, addStudent, getAllStudents, student } = getStudents();
getAllStudents();
</script>
