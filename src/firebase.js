import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyB77Z6QM7l_R3wYNsWiaZgULsN4cSqIZ08",
    authDomain: "forestandoando.firebaseapp.com",
    projectId: "forestandoando",
    storageBucket: "forestandoando.appspot.com",
    messagingSenderId: "250987147995",
    appId: "1:250987147995:web:4497569ae4c5cb5842d2fe",
    measurementId: "G-34NDX7EV56"
});

const auth = app.auth()
const store = app.firestore()
const storage = app.storage()

export { app, auth, store, storage }