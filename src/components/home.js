import React from 'react';
import firebase from "../firebase/firebase";

export default (props) => {
    return(
        <>
            <h1>lol, home</h1>
            <h4> If you see this, that means you are logged: {props.logged.email}</h4>
            <button onClick={() => firebase.auth().signOut()}>Sign Out</button>
        </>
    )
}