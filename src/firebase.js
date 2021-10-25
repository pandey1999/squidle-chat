import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyDlEGT4ucHOMgKp1rjZMLeGUOAfc9l-Lbw",
    authDomain: "facebook-clone-86445.firebaseapp.com",
    projectId: "facebook-clone-86445",
    storageBucket: "facebook-clone-86445.appspot.com",
    messagingSenderId: "1089401454922",
    appId: "1:1089401454922:web:f01c0545217018be83c1b3",
    measurementId: "G-FE5SZJS21C"
};
const  firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth,provider};
export default db;