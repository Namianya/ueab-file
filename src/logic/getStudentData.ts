import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue";
import { useRouter } from "vue-router";

export function getStudentData() {
  const studentData = ref();
  const router = useRouter();
  const studentId = router.currentRoute.value.params.studentId as string;
  const db = getFirestore();
  const studentRef = doc(db, "Student", studentId);
  const getStudentDoc = async () => {
    const docSnap = await getDoc(studentRef);
    if (docSnap.exists()) {
      studentData.value = docSnap.data();
    } else {
      console.log("No such document!");
    }
  };
  return { studentData, getStudentDoc };
}
