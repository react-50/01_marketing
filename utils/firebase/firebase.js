import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChGyF5SvMCV6ZlwW-fZmQ4nO350BFnpHs",
  authDomain: "react50-5fc5c.firebaseapp.com",
  projectId: "react50-5fc5c",
  storageBucket: "react50-5fc5c.appspot.com",
  messagingSenderId: "696802616655",
  appId: "1:696802616655:web:7a5d251a5362247c05d13a",
  measurementId: "G-7M60XP492E",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
// firebase.auth;
firebase.firestore();

export const db = firebase.firestore();
export const marketing = db.collection("01marketing");

export const fire = firebase;
export default firebase;
// let data = [];
// db.collection("01marketing")
//   .get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       // doc.data() is never undefined for query doc snapshots
//       data.push(doc.data());
//       // console.log(doc.id, " => ", doc.data());
//     });
//     console.log("Data from firebase", data);
//   });
