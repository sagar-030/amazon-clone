// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBiwE4nAlcz83G6Bumib3a5yD48oOz-8CI",
    authDomain: "clone-26c7e.firebaseapp.com",
    projectId: "clone-26c7e",
    storageBucket: "clone-26c7e.appspot.com",
    messagingSenderId: "986745354262",
    appId: "1:986745354262:web:edae990c8c72c852009d37",
    measurementId: "G-42XFNTKL0W"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};