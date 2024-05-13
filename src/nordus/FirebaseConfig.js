import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth"; 
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'; 

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
export const FIREBASE_DB = getFirestore(FIREBASE_APP);

// Inicialize o Firebase Authentication com AsyncStorage fornecido
export const auth = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
