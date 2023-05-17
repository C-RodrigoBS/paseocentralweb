import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYNoXP0hYdPntjiy-HwUHgS06pr5hO_WU",
  authDomain: "paseocentral-ecd36.firebaseapp.com",
  projectId: "paseocentral-ecd36",
  storageBucket: "paseocentral-ecd36.appspot.com",
  messagingSenderId: "180403944883",
  appId: "1:180403944883:web:5b37c67b2cef43c4de1fc6",
  measurementId: "G-F6LJNENGGD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app)