// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID


  apiKey: "AIzaSyD28EBSe4Ebj5d_SkVKjGMKrvgIQVqUoMY",
  authDomain: "react-app-7cc11.firebaseapp.com",
  projectId: "react-app-7cc11",
  storageBucket: "react-app-7cc11.appspot.com",
  messagingSenderId: "1084964550000",
  appId: "1:1084964550000:web:944054ec0ad594f3440bb5",
  measurementId: "G-HS2DNG9GV5"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;