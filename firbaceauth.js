  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
  import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBNMvZvFc-cBYSRBhqWM7z0Nc_dQi-b9Nk",
    authDomain: "todolist-zahra.firebaseapp.com",
    databaseURL: "https://todolist-zahra-default-rtdb.firebaseio.com",
    projectId: "todolist-zahra",
    storageBucket: "todolist-zahra.firebasestorage.app",
    messagingSenderId: "298438939395",
    appId: "1:298438939395:web:e20d4438c365fe17bc8f36",
    measurementId: "G-RJCBX687EW"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  const signUp=document.getElementById('submitSignUp');

  signUp.addEventListener("click",(e) =>{
    e.preventDefault()
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fName').value;

    const auth=getAuth();
    const db=getFirestore();
  })