import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDE7bQuJzYbTit92fRYLUFVyqOKHwMumtQ",
  authDomain: "eleos-solutions.firebaseapp.com",
  projectId: "eleos-solutions",
  storageBucket: "eleos-solutions.appspot.com",
  messagingSenderId: "275028304842",
  appId: "1:275028304842:web:e610a9fcefdc7ef15e2533",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
