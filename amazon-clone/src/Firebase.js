import firebase from "firebase";
// const firebaseApp=firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEqjbjQi2NpAHBUmiXhJFHVpR3soqH_fg",
  authDomain: "clone-c0bde.firebaseapp.com",
  projectId: "clone-c0bde",
  storageBucket: "clone-c0bde.appspot.com",
  messagingSenderId: "971209082342",
  appId: "1:971209082342:web:0ece1f1cfcb353f9988227",
  measurementId: "G-ESD8VY7TH1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);