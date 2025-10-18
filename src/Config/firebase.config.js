import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD2HZ5_Q91i3OzEyeK5dJ-fw1Ed1kmdWE",
  authDomain: "project-dragon-news-bf026.firebaseapp.com",
  projectId: "project-dragon-news-bf026",
  storageBucket: "project-dragon-news-bf026.firebasestorage.app",
  messagingSenderId: "408667083005",
  appId: "1:408667083005:web:7c6d2ba6eab5d60f366e94",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
