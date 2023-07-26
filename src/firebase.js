// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfTTrwh9A_CXWinq-Z1tufD2oZ6IoZ4t0",
  authDomain: "wisecitieswebdev.firebaseapp.com",
  projectId: "wisecitieswebdev",
  storageBucket: "wisecitieswebdev.appspot.com",
  messagingSenderId: "351508884617",
  appId: "1:351508884617:web:9d87d780f48b5852daaa58",
  measurementId: "G-GHKT6WRLVX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, db };