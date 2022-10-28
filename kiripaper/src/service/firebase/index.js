import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBfqsk4PSX-QqGmaz5CVIhKKCZ_t2ZN2Ek",
  authDomain: "backendkiri.firebaseapp.com",
  projectId: "backendkiri",
  storageBucket: "backendkiri.appspot.com",
  messagingSenderId: "727304675814",
  appId: "1:727304675814:web:5cf10d91b2151bec4d7627"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)