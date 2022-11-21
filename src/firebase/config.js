import firebase from "firebase/app";
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbaJfAirMM63QoyBYVMigBW6PRdU9kh8M",
  authDomain: "bloggy-vue.firebaseapp.com",
  projectId: "bloggy-vue",
  storageBucket: "bloggy-vue.appspot.com",
  messagingSenderId: "974781142848",
  appId: "1:974781142848:web:a2a30974a1def68a1dcca5"
};

// Initialize Firebase Config
firebase.initializeApp(firebaseConfig);

// Initialize Firestore Database
let db = firebase.firestore();

let timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db,timestamp };