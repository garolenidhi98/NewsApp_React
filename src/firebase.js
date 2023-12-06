// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_dS-de4MJf_mFK_PbZ4bYNd7GydC7pNQ",
  authDomain: "news-app-4e267.firebaseapp.com",
  projectId: "news-app-4e267",
  storageBucket: "news-app-4e267.appspot.com",
  messagingSenderId: "782497287686",
  appId: "1:782497287686:web:5f1f6c056baa0528b5bd87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const db = getFirestore(app)