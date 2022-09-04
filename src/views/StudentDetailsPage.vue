
<template>
    <div>
        <div>
            <p class="text-xl font-bold">Students <span class="text-primary">Details</span></p>
        </div>
        <div @click="addStudent" class="btn btn-ghost">Add to firebase</div>
        <div v-if="gettingData">loading the student data</div>
        <div v-else  v-for="student in students" :key="student.id">
           Name {{ student.name }} - ID:{{ student.id }}- age:{{ student.age }}
        </div>
    </div>
</template>
<script setup lang="ts">
    import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
    import { type Ref, ref } from "vue";
    import  {type Student}  from "../types/student";
    const students:Ref<Array<Student>> = ref([])

    const db = getFirestore() // get firestore instance
    const gettingData= ref(false)

    const collectionRef = collection(db, 'students') // get collection reference

   getDocs(collectionRef).then((querySnapshot) => {
    gettingData.value = true // set the loading state to true
    querySnapshot.forEach((doc) => {
        students.value.push(doc.data() as Student ) // add doc objects to students array
        console.log(doc.id, " => ", doc.data());
        });
        gettingData.value = false // set the loading state to true
    });

    const addStudent = async () => {
        const docRef = await addDoc(collection(db, "students"), {
            id: 1,
            name: "Ada",
            age: 12
        });
        console.log("Document written with ID: ", docRef.id);
    }


</script>
