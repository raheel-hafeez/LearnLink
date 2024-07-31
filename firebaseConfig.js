// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2x1HL-kd_XBiui1F83B_EhQT8YK8dp1o",
  authDomain: "learnlink-c5dc1.firebaseapp.com",
  projectId: "learnlink-c5dc1",
  storageBucket: "learnlink-c5dc1.appspot.com",
  messagingSenderId: "275169197630",
  appId: "1:275169197630:web:e3ad05964738f754cddb6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)