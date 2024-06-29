// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0v7UK7t55XMdshLpunw381aR-LqwlXJ0",
  authDomain: "hype-heaven.firebaseapp.com",
  projectId: "hype-heaven",
  storageBucket: "hype-heaven.appspot.com",
  messagingSenderId: "230047734817",
  appId: "1:230047734817:web:92c15be496501559431760"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);