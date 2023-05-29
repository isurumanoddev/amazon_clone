// For Firebase JS SDK v7.20.0 and later, measurementId is optional



import { initializeApp, } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBpV_k3-Ct7iHbxNS-SY_znA9SmW6PMg-w",
  authDomain: "clone-202305.firebaseapp.com",
  projectId: "clone-202305",
  storageBucket: "clone-202305.appspot.com",
  messagingSenderId: "620110681681",
  appId: "1:620110681681:web:2ab75012a51126b72e8a70",
  measurementId: "G-445PEHH1EF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);

export default app;

