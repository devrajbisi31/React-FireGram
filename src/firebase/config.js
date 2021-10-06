// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcLAwisH1xWwOzREj4tgL38WOSUTrpu5g",
  authDomain: "firegram-dev-raj.firebaseapp.com",
  projectId: "firegram-dev-raj",
  storageBucket: "firegram-dev-raj.appspot.com",
  messagingSenderId: "991549527944",
  appId: "1:991549527944:web:f184536997a5446b368c3d",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
