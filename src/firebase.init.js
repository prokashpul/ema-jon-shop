// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVX04-TUUJIBjv6iSQfYJsTU8uhXl4cZs",
  authDomain: "ema-jon-shop-ce231.firebaseapp.com",
  projectId: "ema-jon-shop-ce231",
  storageBucket: "ema-jon-shop-ce231.appspot.com",
  messagingSenderId: "858496703116",
  appId: "1:858496703116:web:84c259e980ed5b07d379a9",
  measurementId: "G-VKFVCC6FG6",
};

// Initialize Firebase
const emaJonApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(emaJonApp);
const auth = getAuth(emaJonApp);
export default auth;
