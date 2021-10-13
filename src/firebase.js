
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAlGhOSkM_Y7wbct8ujLYpE9skdn-9ccD8",
  authDomain: "myntra-b17ca.firebaseapp.com",
  projectId: "myntra-b17ca",
  storageBucket: "myntra-b17ca.appspot.com",
  messagingSenderId: "739646906541",
  appId: "1:739646906541:web:900ed9934a5c0678afa624",
  measurementId: "G-LBZ4K31BQX"
};

firebase.initializeApp(firebaseConfig)

export {firebase};