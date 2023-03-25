import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACI8Xqkkpib9ut1ElySBx-L6U49Dnt-dg",
  authDomain: "chat-8292a.firebaseapp.com",
  projectId: "chat-8292a",
  storageBucket: "chat-8292a.appspot.com",
  messagingSenderId: "809529177263",
  appId: "1:809529177263:web:c3184e596cf65ed285505a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
