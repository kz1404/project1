import firebase from "firebase/app";
import 'firebase/firestore';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJRtDlMqZCg4c0Oy-S7BZTWshD56RSVk8",
  authDomain: "project1-e81bb.firebaseapp.com",
  projectId: "project1-e81bb",
  storageBucket: "project1-e81bb.appspot.com",
  messagingSenderId: "25537795836",
  appId: "1:25537795836:web:335ad4ae0cf4cafb116979",
  measurementId: "G-WXJZ8LZ7H6"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {db};