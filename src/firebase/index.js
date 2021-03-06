import firebase from "firebase/app";
import "firebase/firestore";

import { firebaseConfig } from "../config/index";

const app = firebase.initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}