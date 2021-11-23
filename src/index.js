import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase/compat";
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp( {
    apiKey: "AIzaSyDDxKsYPG9dcVZwwB8hCc3w9AgiTcar_D0",
    authDomain: "chat-react-f91a2.firebaseapp.com",
    projectId: "chat-react-f91a2",
    storageBucket: "chat-react-f91a2.appspot.com",
    messagingSenderId: "798480509811",
    appId: "1:798480509811:web:ee08b84b5979bb5ac87306",
    measurementId: "G-XJ54E1ZKF5"
});

export const Context = createContext(null);

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <BrowserRouter>
        <Context.Provider value={{
            firebase,
            auth,
            firestore,
        }}>
            <App />
        </Context.Provider>
    </BrowserRouter>,
  document.getElementById('root')
);
