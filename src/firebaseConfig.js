import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {FIREBASE_API_KEY} from './clientkey';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "event-management-ecb0a.firebaseapp.com",
  projectId: "event-management-ecb0a",
  storageBucket: "event-management-ecb0a.appspot.com",
  messagingSenderId: "216313120742",
  appId: "1:216313120742:web:3962cec074a70d7e65f827"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);