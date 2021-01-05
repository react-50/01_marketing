import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyChGyF5SvMCV6ZlwW-fZmQ4nO350BFnpHs',
  authDomain: 'react50-5fc5c.firebaseapp.com',
  projectId: 'react50-5fc5c',
  storageBucket: 'react50-5fc5c.appspot.com',
  messagingSenderId: '696802616655',
  appId: '1:696802616655:web:7a5d251a5362247c05d13a',
  measurementId: 'G-7M60XP492E',
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const storage = firebase.storage()
export const storageRef = storage.ref()
export const db = firebase.firestore()
export const fire = firebase
export default firebase
