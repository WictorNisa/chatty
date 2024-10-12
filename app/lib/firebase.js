import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDntlKPcEzBidjp4xBRnvldI46j53Q2x8Y",
  authDomain: "firenext-app-1b40d.firebaseapp.com",
  projectId: "firenext-app-1b40d",
  storageBucket: "firenext-app-1b40d.appspot.com",
  messagingSenderId: "586510634962",
  appId: "1:586510634962:web:f99964c4b10f497365020b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)