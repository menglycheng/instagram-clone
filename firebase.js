// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBJdI0nWwj7bLDCat1m5ggrBuhdtKI0-74',
  authDomain: 'insta-clone-3b2a4.firebaseapp.com',
  projectId: 'insta-clone-3b2a4',
  storageBucket: 'insta-clone-3b2a4.appspot.com',
  messagingSenderId: '1045254902045',
  appId: '1:1045254902045:web:79cd6546187200957f11f4',
  measurementId: 'G-DL78S1DXV9',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
