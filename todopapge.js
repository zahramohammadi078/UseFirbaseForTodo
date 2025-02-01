import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  
import { getAuth, onAuthStateChanged, signOut ,signInAnonymously} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNMvZvFc-cBYSRBhqWM7z0Nc_dQi-b9Nk",
    authDomain: "todolist-zahra.firebaseapp.com",
    databaseURL: "https://todolist-zahra-default-rtdb.firebaseio.com",
    projectId: "todolist-zahra",
    storageBucket: "todolist-zahra.firebasestorage.app",
    messagingSenderId: "298438939395",
    appId: "1:298438939395:web:3569d62b57d1de5fbc8f36",
    measurementId: "G-SCL03Q23KB"
  };

  const app = initializeApp(firebaseConfig);

  const auth=getAuth();
  const db=getFirestore();

  onAuthStateChanged(auth, (user)=>{
    const loggedInUserId=localStorage.getItem('loggedInUserId');
    if(loggedInUserId){
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)

        .then((docSnap) => {
            if(docSnap.exists()){
                const userData=docSnap.data();
                document.getElementById('loggedUserFName').innerText=userData.firstName;
                document.getElementById('loggedUserEmail').innerText=userData.email;
                document.getElementById('loggedUserLName').innerText=userData.lastName;
            }else{
                console.log("no document found matching id")
            }
        })
        .catch((error) =>{
            console.log("Error getting document");
        })
    }
    else{
        console.log("User Id not Found in Local storage")
    }
  })


  const logoutButton=document.getElementById('logout');
  logoutButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })


  const logintButton=document.getElementById('login');
  logintButton.addEventListener('click',()=>{
    localStorage.removeItem('loggedInUserId');
    signOut(auth)
    .then(()=>{
        window.location.href='index.html';
    })
    .catch((error)=>{
        console.error('Error Signing out:', error);
    })
  })

onAuthStateChanged(auth, (user) => {
    const logoutButton = document.getElementById('logout');
    const loginButton = document.querySelector('#login');
  
    if (user) {
      if (user.isAnonymous) {
       
        logoutButton.style.display = 'none';
        loginButton.style.display = 'block'; 
      } else {
       
        logoutButton.style.display = 'block'; 
        loginButton.style.display = 'none';  
      }
    } else {
      
      logoutButton.style.display = 'none'; 
      loginButton.style.display = 'block'; 
    }
  });
  


  