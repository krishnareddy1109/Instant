// ✅ Firebase setup for @instant

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// 🔑 Your Firebase project config
const firebaseConfig = {
  apiKey: "AIzaSyDt-5OBDoGF__GO30srBW2_zrYZt-COgRg",
  authDomain: "a-instant.firebaseapp.com",
  projectId: "a-instant",
  storageBucket: "a-instant.appspot.com", // ✅ corrected from .firebasestorage.app
  messagingSenderId: "214865089998",
  appId: "1:214865089998:web:60b789b14a379f313e079f",
  measurementId: "G-BBXYBJZBQ0"
};

// 🚀 Initialize Firebase app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// 🔐 Auth and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

export { auth, provider, database };
