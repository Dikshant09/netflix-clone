import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4GI5jfIQK6wgwex3sO7zHSFsVDvt5ABA",
  authDomain: "netflix-clone-7b775.firebaseapp.com",
  projectId: "netflix-clone-7b775",
  storageBucket: "netflix-clone-7b775.appspot.com",
  messagingSenderId: "825895351507",
  appId: "1:825895351507:web:6b74d34d10bab1f68cd026",
  measurementId: "G-F71N59YXLK"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();