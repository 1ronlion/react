import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyCyR-ynyPH_HGIOOEhUOYwO-rvBQB9Wtbk",
    authDomain: "reactapp-4d582.firebaseapp.com",
    projectId: "reactapp-4d582",
    storageBucket: "reactapp-4d582.appspot.com",
    messagingSenderId: "970809397994",
    appId: "1:970809397994:web:35e808de08ad5cdd0d3d93",
    measurementId: "G-C9ZJ94QMTV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.db = firebase.firestore();
  firebase.auth = firebase.auth();

export default firebase;