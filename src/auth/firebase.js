// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export function crearUsuario(email, password) {
    return (
        new Promise((res, rej) => {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    console.log("Credenciales", userCredential)
                    const user = userCredential.user;
                    console.log(user)
                    res(user)
                    // ...
                })
                .catch((error) => {
                    console.log(error.code, error.message)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rej(error)
                    // ..
                });
        })
    )
}


auth.useDeviceLanguage()
export function logearG() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("test", result)
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            console.log("test error", error)
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

export function loginEmailPass(email, password) {
    return (
        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    console.log("Credenciales", userCredential)
                    const user = userCredential.user;
                    console.log(user)
                    res(user)
                })
                .catch((error) => {
                    console.log(error.code)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    rej(error)
                });
        })
    )
}