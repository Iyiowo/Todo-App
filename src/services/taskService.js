import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export const addTaskToFirestore = async (task) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    return { id: docRef.id, ...task };
  } catch (error) {
    console.error("Error adding task: ", error);
  }
};