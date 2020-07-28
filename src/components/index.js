import React, {useState} from 'react';
import firebase from "../firebase/firebase";
import Home from "./home";
import Login from "./login";
import Signup from "./signup"
import Decider from "./decider"
import {HashRouter as Router, Route, Redirect, Switch} from "react-router-dom";

const ProtectedRoute = ({ isAllowed, ...props }) => {
    console.log(isAllowed);
    return isAllowed ? <Route {...props}/> : <Redirect to="/login"/>
}

export default () => {
    const [logged, setLogged] = useState("undecided");
    firebase.auth().onAuthStateChanged(usr =>{
        setLogged(usr);
    })
    if (logged === "undecided"){
        return <h2>Wait, checking logged status.</h2>
    }
    return(
        <Router>
            <Switch>
                <Route exact path = "/" render = {(props) => <Decider {...props} logged = {logged}/>}/>
                <ProtectedRoute isAllowed={logged} exact path = "/home" render = {(props) => <Home {...props} logged = {logged}/>}/>
                <Route exact path = "/login" render = {(props) => <Login {...props} logged = {logged}/>}/>
                <Route exact path = "/signup" render = {(props) => <Signup {...props} logged = {logged}/>}/>
            </Switch>
        </Router>
    )
}