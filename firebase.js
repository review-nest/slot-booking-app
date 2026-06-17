import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";



const firebaseConfig = {

  apiKey: "AIzaSyADifV9NEMzO-8O1j4mnP-4hBrChx4T1a0",

  authDomain: "slot-book-44528.firebaseapp.com",

  projectId: "slot-book-44528",

  storageBucket: "slot-book-44528.appspot.com",

  messagingSenderId: "192574820430",

  appId: "1:192574820430:web:edce52f6d5aff8ea5b731f"

};



const app = initializeApp(firebaseConfig);



const db = getFirestore(app);


const auth = getAuth(app);



export {

  db,

  auth,

  collection,

  addDoc,

  onSnapshot,

  deleteDoc,

  doc,

  updateDoc,

  setDoc,

  serverTimestamp

};