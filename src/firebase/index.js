
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASth6K8hWh0vtkofsV0Mo2EE6UzNxMs0U",
  authDomain: "auto-config-vue.firebaseapp.com",
  projectId: "auto-config-vue",
  storageBucket: "auto-config-vue.appspot.com",
  messagingSenderId: "475739652920",
  appId: "1:475739652920:web:117fa7ebe4cb16b5c637cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);
const db = getFirestore(app);

export { auth, db };