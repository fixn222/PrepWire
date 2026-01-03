// Import the functions you need from the SDKs you need
import { initializeApp ,getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMiELz3uDpFf4F9WUUDvGzW0Pll5PG0pA",
  authDomain: "prepwise-90c2b.firebaseapp.com",
  projectId: "prepwise-90c2b",

  storageBucket: "prepwise-90c2b.firebasestorage.app",
  messagingSenderId: "1084542489180",
  appId: "1:1084542489180:web:cd9798c5ff9da182f64c99",
  measurementId: "G-6HPVBGLRR5"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();


export const auth = getAuth(app);

