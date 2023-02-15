import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAvkN55Kf0HFqzKiRwnCE-uJFL47XsIflI",
  authDomain: "fir-39a44.firebaseapp.com",
  projectId: "fir-39a44",
  storageBucket: "fir-39a44.appspot.com",
  messagingSenderId: "954413653806",
  appId: "1:954413653806:web:00c84c67c0cb0a7a2724bf",
  measurementId: "G-NQTFKXGPG8"
};
export default firebase.initializeApp(firebaseConfig);
