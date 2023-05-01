import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyATHYqUlaW_TE-CnS4FY-1HLHp07i3sFlI",
  authDomain: "miniblog-3b028.firebaseapp.com",
  projectId: "miniblog-3b028",
  storageBucket: "miniblog-3b028.appspot.com",
  messagingSenderId: "91208162180",
  appId: "1:91208162180:web:bb7bb467b0b597aba35bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }