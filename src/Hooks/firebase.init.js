// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: "AIzaSyDh9J3S60XhLzeZZ5EM2yo-3D1WxGP0xlk",
        authDomain: "chaldalwarehouse.firebaseapp.com",
        projectId: "chaldalwarehouse",
        storageBucket: "chaldalwarehouse.appspot.com",
        messagingSenderId: "754255628861",
        appId: "1:754255628861:web:f97012907b5221497cb854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;