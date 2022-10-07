// import firebase from Firebase module
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGbEi8eflOtPvJyVepXRoV-5ALtaiPa9A",
  authDomain: "clone-478e5.firebaseapp.com",
  projectId: "clone-478e5",
  storageBucket: "clone-478e5.appspot.com",
  messagingSenderId: "748332886726",
  appId: "1:748332886726:web:fe326b26e50719955385c7",
  measurementId: "G-YWB50H6RP3",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
