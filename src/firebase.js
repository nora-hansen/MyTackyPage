// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULRIUbz7cr-VbsJiAITpHoggSYo70cV0",
  authDomain: "testproject-4ab4e.firebaseapp.com",
  projectId: "testproject-4ab4e",
  storageBucket: "testproject-4ab4e.appspot.com",
  messagingSenderId: "473752157485",
  appId: "1:473752157485:web:b36fdd0eafb06a199a27a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);