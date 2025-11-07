
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "snapeatsrss-55a87.firebaseapp.com",
  projectId: "snapeatsrss-55a87",
  storageBucket: "snapeatsrss-55a87.firebasestorage.app",
  messagingSenderId: "448020242131",
  appId: "1:448020242131:web:c7e1501a0e692f3faefe26",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
