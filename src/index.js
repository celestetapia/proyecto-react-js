import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App  from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCvsWkT4Kkujake3BHj238WC7hF7XkNAO4",
  authDomain: "coderhouse-ecm.firebaseapp.com",
  projectId: "coderhouse-ecm",
  storageBucket: "coderhouse-ecm.appspot.com",
  messagingSenderId: "209799525667",
  appId: "1:209799525667:web:257220099a897164164896"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


