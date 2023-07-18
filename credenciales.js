// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtOCFaVssBpR6CgF9hTgDtNK2WD4IgSMk",
  authDomain: "my-login-e6475.firebaseapp.com",
  projectId: "my-login-e6475",
  storageBucket: "my-login-e6475.appspot.com",
  messagingSenderId: "514553377057",
  appId: "1:514553377057:web:4efb7f6c39f989339ece60"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase