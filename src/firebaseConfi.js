// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfi = {
  apiKey: "AIzaSyDtmI61f7-SXN7E1JlKaNRfyN9i3DlKr3Y",
  authDomain: "orabi-3c9aa.firebaseapp.com",
  databaseURL: "https://orabi-3c9aa-default-rtdb.firebaseio.com",
  projectId: "orabi-3c9aa",
  storageBucket: "orabi-3c9aa.appspot.com",
  messagingSenderId: "250781756258",
  appId: "1:250781756258:web:8d3b331c0de8c1b55c1a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfi);

export default firebaseConfi