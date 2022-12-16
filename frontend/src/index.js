import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJHATv6TOIjvvhr3ZYkYL_7hlMGI1iMdc",
  authDomain: "react-full-stack-site-b1fae.firebaseapp.com",
  projectId: "react-full-stack-site-b1fae",
  storageBucket: "react-full-stack-site-b1fae.appspot.com",
  messagingSenderId: "264134312560",
  appId: "1:264134312560:web:efa9926b609bcda249eab5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
