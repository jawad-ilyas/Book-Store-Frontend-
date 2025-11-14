// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJu30tDc6UhqXa7SRzmjs6sLr4zBg5SV0",
    authDomain: "book-app-mern-stack.firebaseapp.com",
    projectId: "book-app-mern-stack",
    storageBucket: "book-app-mern-stack.firebasestorage.app",
    messagingSenderId: "412038872184",
    appId: "1:412038872184:web:52df1d2f9b986890d6018d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)