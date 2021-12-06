// Firebase 8

// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";     // Import authentication module

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// });

// export const auth = app.auth();
// export default app;

// Firebase 9

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkattfp9NJDtcifTaWaHlekzfiDZJd37o",
  authDomain: "auth-development-ce842.firebaseapp.com",
  databaseURL: "https://auth-development-ce842-default-rtdb.firebaseio.com",
  projectId: "auth-development-ce842",
  storageBucket: "auth-development-ce842.appspot.com",
  messagingSenderId: "661241683181",
  appId: "1:661241683181:web:daf114d41a74a47178c0e4"
};

// const firebaseConfig = {
//    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
//    appId: process.env.REACT_APP_FIREBASE_APP_ID
// }

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);             // Setting up a variable for authentication, which gives us the authentication instance

export default app;                           // This is for Firebase in general for use in our application