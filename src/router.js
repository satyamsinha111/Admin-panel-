import React, { useState } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Dashboard from "./Dashboard/dashboard"
import Home from "./core/home"
import Signin from "./Authentication/Signin"
import Signup from "./Authentication/Signup"
import PublicRouteRestriction from "./Authentication/authhelpers/restrictpublicroute"
import PrivateRoute from "./Authentication/authhelpers/privateroutes"
import PublicRoute from "./Authentication/authhelpers/publicroutes"


function router(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signin">
                    <Signin />
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    );
}

export default router;