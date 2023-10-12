import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0l5SCHqiULYwvhnLX0gZ8Yi-xuWZd22U",
  authDomain: "ui-challenge-b3324.firebaseapp.com",
  projectId: "ui-challenge-b3324",
  storageBucket: "ui-challenge-b3324.appspot.com",
  messagingSenderId: "708363351182",
  appId: "1:708363351182:web:88f14af224b6394ad7c5df",
  measurementId: "G-QCXG9XSPGB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);