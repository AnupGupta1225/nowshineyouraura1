 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC1W9upXAlWflC2qrki2yZnE_OxLQQ7rkc",
  authDomain: "aura-app-3a407.firebaseapp.com",
  projectId: "aura-app-3a407",
  storageBucket: "aura-app-3a407.firebasestorage.app",
  messagingSenderId: "926113752583",
  appId: "1:926113752583:web:01eaaa7a3237bf0f9aaca2",
  measurementId: "G-Y678D2N8RN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { collection, doc, getDoc, getDocs, setDoc, updateDoc, deleteDoc, query, where, orderBy };