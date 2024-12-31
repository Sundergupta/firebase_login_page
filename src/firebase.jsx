// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_p_62gEiiyn64V0Z-VJq3mBs4F9FvBDI",
    authDomain: "project-31da9.firebaseapp.com",
    projectId: "project-31da9",
    storageBucket: "project-31da9.appspot.com", // Fixed typo: `.firebasestorage.app` to `.appspot.com`
    messagingSenderId: "1039632469606",
    appId: "1:1039632469606:web:c2b94b3be425d4dfa2e7a7",
    measurementId: "G-RTZ8GEQ7TJ"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };