import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBt3p4STjGqXOdG2EyqhNfiI-f4FTEuGeo",
    authDomain: "rickmortylogin.firebaseapp.com",
    databaseURL: "https://rickmortylogin.firebaseio.com",
    projectId: "rickmortylogin",
    storageBucket: "rickmortylogin.appspot.com",
    messagingSenderId: "648237823458",
    appId: "1:648237823458:web:58ab4f853f66f1001b75bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  let db = firebase.firestore().collection('favs')

  export function updateDB(array, uid){
     return db.doc(uid).set({array})
  }

  export function signOutGoogle(){
      firebase.auth().signOut()
  }

  export function loginWithGoogle(){
      let provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
      .then(snap => snap.user)
  }
