import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCS_aXwVsbY5U3T2cNqEM0uxIyyBwMq8I",
  authDomain: "twitter-clone-84bf7.firebaseapp.com",
  projectId: "twitter-clone-84bf7",
  storageBucket: "twitter-clone-84bf7.appspot.com",
  messagingSenderId: "698633322409",
  appId: "1:698633322409:web:7b5a408764b977ce820eb8",
  measurementId: "G-ZCHMW9RMY1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;