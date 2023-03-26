// Import the functions you need from the SDKs you need
import firebase from "firebase";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2iDTicIj8KYpdgutDYJTLqh8qqN9bCVU",
  authDomain: "todo-react-native-31674.firebaseapp.com",
  projectId: "todo-react-native-31674",
  storageBucket: "todo-react-native-31674.appspot.com",
  messagingSenderId: "965455254412",
  appId: "1:965455254412:web:3d233275fc710d6cdfbca9",
  measurementId: "G-RC4W00BXGB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
