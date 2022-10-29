// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//▼vamos a utilizar la base de datos solamente. Hacer el import de función getFirestore
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmLMF0ewCqT_M8hzTMAqO-TcvMZ5-eNLE",
  authDomain: "backendmikun.firebaseapp.com",
  projectId: "backendmikun",
  storageBucket: "backendmikun.appspot.com",
  messagingSenderId: "298858372838",
  appId: "1:298858372838:web:451a26a5c483183112e527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//▲Para usar los SDK de los productos a utilizar -por npm-
//▼guardar la referencia a la base de datos
export const db = getFirestore(app)