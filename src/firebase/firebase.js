import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyDxsr6WiqYICYQl5fRVu_-ssJeTOpszb4Q",
    authDomain: "fir-test-65cb7.firebaseapp.com",
    databaseURL: "https://fir-test-65cb7.firebaseio.com",
    projectId: "fir-test-65cb7",
    storageBucket: "fir-test-65cb7.appspot.com",
    messagingSenderId: "570794352790",
    appId: "1:570794352790:web:51262a5f5b3f3ddca822b7",
    measurementId: "G-VFCQQTC5HS"
})

export default app;