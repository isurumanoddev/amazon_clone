// For Firebase JS SDK v7.20.0 and later, measurementId is optional



import { initializeApp, } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqwmgTmZYHfL1nOZJ7DLF3WK_GZvZs7PM",
  authDomain: "clone-a545c.firebaseapp.com",
  projectId: "clone-a545c",
  storageBucket: "clone-a545c.appspot.com",
  messagingSenderId: "835816278326",
  appId: "1:835816278326:web:cfe0b5cc22f85eabad4b97",
  measurementId: "G-7GHMFHD8W4"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;

