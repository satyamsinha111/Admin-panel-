import React from "react"
import { Route, Redirect } from "react-router-dom"
import { isAuthenticated } from "./authhelper"



const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated() && isAuthenticated().user.role===0 ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
            }
        />
    )
}


export default PublicRoute
