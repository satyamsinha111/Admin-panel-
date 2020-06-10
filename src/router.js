import React,{useState} from "react"
import {Route,Switch,BrowserRouter as Router} from "react-router-dom"
import Dashboard from "./Dashboard/dashboard"
import LoginForm from "./Dashboard/login"

function router(props) {
    return (
        <Router>
            <Switch>
                <Route  path="/login" exact>
                    <LoginForm />
                </Route>
                <Route path="/dashboard" exact>
                    <Dashboard />
                </Route>
            </Switch>
        </Router>
    );
}

export default router;