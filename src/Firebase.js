// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFRqK077NYmVqqlGTIW5G03DQvamPIS_U",
  authDomain: "myblog-79d4d.firebaseapp.com",
  projectId: "myblog-79d4d",
  storageBucket: "myblog-79d4d.appspot.com",
  messagingSenderId: "444384581455",
  appId: "1:444384581455:web:ca2e2dfd4997593921d73a",
  measurementId: "G-EPH6L9PYDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };