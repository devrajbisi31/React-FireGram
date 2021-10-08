// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

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
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage();
const projectFirestore = getFirestore(app);


export { projectStorage, projectFirestore };
