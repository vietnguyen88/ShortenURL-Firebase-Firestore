// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// import {getf}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlOVFN0XyproWpFvDAvAgZ8Jdth14JWYk",
  authDomain: "shortern-url-2024.firebaseapp.com",
  projectId: "shortern-url-2024",
  storageBucket: "shortern-url-2024.appspot.com",
  messagingSenderId: "1075307147239",
  appId: "1:1075307147239:web:152aa81168ec287a445742",
  measurementId: "G-FLFZ68D8FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)