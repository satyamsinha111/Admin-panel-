import React,{useState} from "react"
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import Dashboard from "./Dashboard/dashboard"
import LoginForm from "./Dashboard/login"
import Home from "./core/home"



function router(props) {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
                <Route  path="/login">
                    <LoginForm />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default router;