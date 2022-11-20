// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaJfAirMM63QoyBYVMigBW6PRdU9kh8M",
  authDomain: "bloggy-vue.firebaseapp.com",
  projectId: "bloggy-vue",
  storageBucket: "bloggy-vue.appspot.com",
  messagingSenderId: "974781142848",
  appId: "1:974781142848:web:a2a30974a1def68a1dcca5"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

let db = getFirestore(firebase)

export { db };