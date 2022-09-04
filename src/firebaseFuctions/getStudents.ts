import { getFirestore, collection, getDocs, addDoc} from "firebase/firestore";
import { type Ref, ref } from "vue";
import  {type Student}  from "../types/student";
const students:Ref<Array<Student>> = ref([])

const db = getFirestore() // get firestore instance
const gettingData= ref(false)

const collectionRef = collection(db, 'students') // get collection reference

// get all students
getDocs(collectionRef).then((querySnapshot) => {
gettingData.value = true // set the loading state to true
querySnapshot.forEach((doc) => {
    students.value.push(doc.data() as Student ) // add doc objects to students array
    console.log(doc.id, " => ", doc.data());
    });
    gettingData.value = false // set the loading state to true
});

// add a new student
const addStudent = async () => { 
    const docRef = await addDoc(collection(db, "students"), {
        id: 1,
        name: "Ada",
        age: 12
    });
    console.log("Document written with ID: ", docRef.id);
}