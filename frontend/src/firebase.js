import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTg3GKHjCapIXuvVZtJk59XP7U-A1CAc8",
  authDomain: "classmates-10eb0.firebaseapp.com",
  projectId: "classmates-10eb0",
  storageBucket: "classmates-10eb0.appspot.com",
  messagingSenderId: "110232990060",
  appId: "1:110232990060:web:7a9f75b08ec12e92b14349",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
