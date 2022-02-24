import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "glowing-spork-301bf.firebaseapp.com",
  projectId: "glowing-spork-301bf",
  storageBucket: "glowing-spork-301bf.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_APPID,
  measurementId: process.env.REACT_APP_FIREBASE_API_MEASUREMENT_ID
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;