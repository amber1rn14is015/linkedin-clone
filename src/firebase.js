import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBuufDQaUYfiIbsRO8jqocRH_VaNaw5ViU",
  authDomain: "linkedin-clone-e1b1a.firebaseapp.com",
  projectId: "linkedin-clone-e1b1a",
  storageBucket: "linkedin-clone-e1b1a.appspot.com",
  messagingSenderId: "516063791865",
  appId: "1:516063791865:web:bbf1aac496c08358da7028"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebaseApp.auth()

export { db, auth }

