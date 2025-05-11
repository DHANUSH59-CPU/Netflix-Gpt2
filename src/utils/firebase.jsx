// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtGqOXO-ZJW3Q9YLBClxCMrXG-eIkW1gI",
  authDomain: "netflix-gpt03-629ba.firebaseapp.com",
  projectId: "netflix-gpt03-629ba",
  storageBucket: "netflix-gpt03-629ba.firebasestorage.app",
  messagingSenderId: "963912114287",
  appId: "1:963912114287:web:86c49041763e1ecdf1ad9a",
  measurementId: "G-WX3XYXPK4N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();
const analytics = getAnalytics(app);

export const auth = getAuth();
