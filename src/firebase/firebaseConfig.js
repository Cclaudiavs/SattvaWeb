// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuración de Firebase para tu proyecto
const firebaseConfig = {
    apiKey: "AIzaSyDb2U1r2sxFgzCH-lOpTNCV2CPSsk-1TG8",
    authDomain: "sattva-371c1.firebaseapp.com",
    projectId: "sattva-371c1",
    storageBucket: "sattva-371c1.appspot.com",
    messagingSenderId: "11627802306",
    appId: "1:11627802306:android:4c60dc31192cb882c6d55b"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Servicios de Firebase que vas a utilizar


export const auth = getAuth(app)
export const db = getFirestore(app);

