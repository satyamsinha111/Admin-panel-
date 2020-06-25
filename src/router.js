import React, { useState } from "react"
import { Route, Switch, BrowserRouter as Router } from "react-router-dom"
import Home from "./core/home"
import Signin from "./Authentication/Signin"
import Signup from "./Authentication/Signup"
import PublicRouteRestriction from "./Authentication/authhelpers/restrictpublicroute"
import PrivateRoute from "./Authentication/authhelpers/privateroutes"
import PublicRoute from "./Authentication/authhelpers/publicroutes"
import AdminPanel from "./Users/Admin-Panel"
import UserPanel from "./Users/User-Panel"


function router(props) {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <PublicRouteRestriction path="/signup" component={Signup} />
                <PublicRouteRestriction path="/signin" component={Signin} />
                <PrivateRoute path="/admin" component={AdminPanel} />
                <PublicRoute path="/user" component={UserPanel} />
            </Switch>
        </Router>
    );
}

export default router;