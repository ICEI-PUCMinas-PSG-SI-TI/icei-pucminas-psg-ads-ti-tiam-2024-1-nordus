// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYZ5ybJA-AUvXp1gvD11G8R1pt98Oz2Eg",
  authDomain: "nordus-453c0.firebaseapp.com",
  projectId: "nordus-453c0",
  storageBucket: "nordus-453c0.appspot.com",
  messagingSenderId: "90981023073",
  appId: "1:90981023073:web:ec53acbd2b770b651c1920",
  measurementId: "G-96ZGXNK7TB",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(app);
