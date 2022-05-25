// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA4HqK2CucB3_RQp7djcMiXEsGuhBd0zuU",
    authDomain: "colone-143c3.firebaseapp.com",
    projectId: "colone-143c3",
    storageBucket: "colone-143c3.appspot.com",
    messagingSenderId: "197430231774",
    appId: "1:197430231774:web:3bc387cb7b3b922007384f",
    measurementId: "G-RE7PPV1XJ6",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };