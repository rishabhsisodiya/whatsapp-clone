import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDfx7hrDrT4uREAMXVbCBARf9lLAMFpNuk",
    authDomain: "whatsapp-byrishabh.firebaseapp.com",
    databaseURL: "https://whatsapp-byrishabh.firebaseio.com",
    projectId: "whatsapp-byrishabh",
    storageBucket: "whatsapp-byrishabh.appspot.com",
    messagingSenderId: "77876882997",
    appId: "1:77876882997:web:7d54f252fce8e67ad30b7c",
    measurementId: "G-PWXP4CREW4"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;

