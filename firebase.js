// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCFWR-udwi04egYBYDTe31XfGnLRvieidQ",
    authDomain: "next-firebase-auth-e6fc7.firebaseapp.com",
    projectId: "next-firebase-auth-e6fc7",
    storageBucket: "next-firebase-auth-e6fc7.appspot.com",
    messagingSenderId: "682298422037",
    appId: "1:682298422037:web:0daa083a9242f75531ef1c",
    measurementId: "G-GY77R7JY4Z"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
