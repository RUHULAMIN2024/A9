import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfwW7JHT9-l_8YzLbX3jS-VyCs6A617VI",
  authDomain: "assignment-09-bd30d.firebaseapp.com",
  projectId: "assignment-09-bd30d",
  storageBucket: "assignment-09-bd30d.appspot.com",
  messagingSenderId: "443613491385",
  appId: "1:443613491385:web:17178241947586a8deab68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;