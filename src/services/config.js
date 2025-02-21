
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvltEOvERJj7MqRxTY5ZcR-DqqS9_B67I",
  authDomain: "e-comerce-bebidas-online.firebaseapp.com",
  projectId: "e-comerce-bebidas-online",
  storageBucket: "e-comerce-bebidas-online.firebasestorage.app",
  messagingSenderId: "190866331938",
  appId: "1:190866331938:web:42a0975e4169179cca2d7b",
  measurementId: "G-LJ4GWN52TY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);