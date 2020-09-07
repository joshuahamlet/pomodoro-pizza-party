import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3UkdredzPAL2dmJvYmflCWlG-Uqob4vM",
  authDomain: "pomodoropizzaparty.firebaseapp.com",
  databaseURL: "https://pomodoropizzaparty.firebaseio.com",
  projectId: "pomodoropizzaparty",
  storageBucket: "pomodoropizzaparty.appspot.com",
  messagingSenderId: "838747997264",
  appId: "1:838747997264:web:4b971c46c7b26e38ea3d55",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
