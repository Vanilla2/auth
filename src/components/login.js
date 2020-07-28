import React, {useState} from "react";
import firebase from "../firebase/firebase";
import {Link} from "react-router-dom";

export default (props) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleLogIn = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            props.history.push('/');
        }
        catch(e){
            alert(e.message);
        }
    }
    return(
        <>
            <h2>Log In</h2>
            <h2>{props.logged ? "You are logged in" : "You are not logged in"}</h2>
            <input placeholder="email" name = "email" onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="password" name = "password" onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={handleLogIn}>Log In</button>
            <Link to = "/signup">Sign up</Link>
        </>
    )
}