import firebase from "firebase/app";
import "firebase/database";

export const config = {
  apiKey: "AIzaSyCE2Zlauv-cqMWtthG4JgGLAy5TwdKJ_Cs",
  authDomain: "pet-typescript.firebaseapp.com",
  projectId: "pet-typescript",
  databaseURL: "https://pet-typescript-default-rtdb.firebaseio.com/",
  storageBucket: "pet-typescript.appspot.com",
  messagingSenderId: "17946854706",
  appId: "1:17946854706:web:76a504007d15b6a593432b",
  measurementId: "G-QQZPSRGZCR",
};

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const petRef = databaseRef.child("pet");
export default firebase;
