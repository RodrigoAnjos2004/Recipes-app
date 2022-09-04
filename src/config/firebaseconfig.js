// Import the functions you need from the SDKs you need
import { firebase } from "@react-native-firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6-FxDkAeypdyF9o9gO4fF7fsedWkAEyg",
  authDomain: "login-5d03f.firebaseapp.com",
  projectId: "login-5d03f",
  storageBucket: "login-5d03f.appspot.com",
  messagingSenderId: "1034057507799",
  appId: "1:1034057507799:web:8c7677bf9ecdb89c8e2192"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

firebase.app
export default firebase