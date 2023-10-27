// Import the functions you need from the SDKs you need
// import * as firebase from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjACxJBnYJ7TpYaoiFa8xl2DXUOiE95mg",
    authDomain: "gobank-2f0f5.firebaseapp.com",
    projectId: "gobank-2f0f5",
    storageBucket: "gobank-2f0f5.appspot.com",
    messagingSenderId: "915330058210",
    appId: "1:915330058210:web:e71010aa5fec9fe02b5bbb",
    measurementId: "G-1RWG0YWFFY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
