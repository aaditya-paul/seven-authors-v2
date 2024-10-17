// Import the functions you need from the SDKs you need
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "@firebase/storage";
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAt3TTKzt6Ee_KUi4M2G8Y66qwPd8GtPTM",
  authDomain: "seven-authors.firebaseapp.com",
  projectId: "seven-authors",
  storageBucket: "seven-authors.appspot.com",
  messagingSenderId: "532827720440",
  appId: "1:532827720440:web:2d5a6efd9b7a9fca5b890d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
