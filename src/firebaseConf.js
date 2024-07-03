
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConf = {
  apiKey: "AIzaSyDMcobPAEOUtsiNx_qRmveLHZ7rBkPLRrM",
  authDomain: "e-commarce-b74b8.firebaseapp.com",
  projectId: "e-commarce-b74b8",
  storageBucket: "e-commarce-b74b8.appspot.com",
  messagingSenderId: "785117397133",
  appId: "1:785117397133:web:0c53dbbe0f259e60cba2c4",
  measurementId: "G-0E28WRYMLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConf);
const analytics = getAnalytics(app);



export default firebaseConf