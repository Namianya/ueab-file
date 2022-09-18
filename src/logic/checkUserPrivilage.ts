import { getAuth } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { ref } from "vue";

export function checkUserPrivilage() {
  const userPrivilage = ref("");
  const auth = getAuth();
  const user = auth.currentUser;
  const firestore = getFirestore();

  const getUserPrivilage = async () => {
    if (user) {
      const userRef = doc(firestore, "users", user!.uid);
      const getUserDoc = async () => {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          userPrivilage.value = docSnap.data().privilage;
          return docSnap.data();
        }
      };
    } else {
      // No user is signed in.
      console.log("No user is signed in");
    }
  };
  return { userPrivilage, getUserPrivilage };
}
