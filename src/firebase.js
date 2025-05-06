import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOlfyNSQzfQktdS67tKBoreeTzZ5JmGeY",
  authDomain: "finance-tracker-35f5c.firebaseapp.com",
  projectId: "finance-tracker-35f5c",
  storageBucket: "finance-tracker-35f5c.firebasestorage.app",
  messagingSenderId: "715087550097",
  appId: "1:715087550097:web:e5094d9dfee4b4bf885130",
  measurementId: "G-CBQW28F9CE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
