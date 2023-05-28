// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBpV_k3-Ct7iHbxNS-SY_znA9SmW6PMg-w",
    authDomain: "clone-202305.firebaseapp.com",
    projectId: "clone-202305",
    storageBucket: "clone-202305.appspot.com",
    messagingSenderId: "620110681681",
    appId: "1:620110681681:web:ae9ccf40d884d27e2e8a70",
    measurementId: "G-866KGS6SKR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}