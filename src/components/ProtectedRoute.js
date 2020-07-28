import React from "react";
import {Route} from "react-router-dom"

export default (props) =>{
    return(
        (props.logged) ? <Route exact path = "/"/> : <Route exact path = {props.path}/>
    )
}