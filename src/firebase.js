import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDrBu60WVv5FNwLcsCTbuB2Pb2FQuIK5eM",
  authDomain: "occurence-df954.firebaseapp.com",
  databaseURL: "https://occurence-df954.firebaseio.com",
  projectId: "occurence-df954",
  storageBucket: "",
  messagingSenderId: "779704581019"
})

export const db = firebaseApp.database()