import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAuObdmZYbNZOczrPjlE1lDTXLg4LwZDzM",
  authDomain: "slack-6455e.firebaseapp.com",
  projectId: "slack-6455e",
  storageBucket: "slack-6455e.appspot.com",
  messagingSenderId: "589741856574",
  appId: "1:589741856574:web:afd359c8e253dc3022be6f",
  measurementId: "G-LD45C6N55W"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, db, provider }