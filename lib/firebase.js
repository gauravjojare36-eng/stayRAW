// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBL7yJQLBqoXXXX8vg0X6se0s6T35h_w8c",
  authDomain: "student-secound-hand-books.firebaseapp.com",
  projectId: "student-secound-hand-books",
  storageBucket: "student-secound-hand-books.firebasestorage.app",
  messagingSenderId: "363636035001",
  appId: "1:363636035001:web:b3744d70145a963248fa68",
  measurementId: "G-MZ69HR3JMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
