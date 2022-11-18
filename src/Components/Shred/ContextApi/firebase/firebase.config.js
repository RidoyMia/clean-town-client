// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6Q8BJrr2zRxK3j1XGOwJHbs01Qj0nQ4",
  authDomain: "assignment-12-b040c.firebaseapp.com",
  projectId: "assignment-12-b040c",
  storageBucket: "assignment-12-b040c.appspot.com",
  messagingSenderId: "705767762994",
  appId: "1:705767762994:web:1f02c5c6046449932e602b",
  measurementId: "G-EH7KZ31F5F"
};
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId ,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: "705767762994",
//   appId: "1:705767762994:web:1f02c5c6046449932e602b",
//   measurementId: "G-EH7KZ31F5F"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;