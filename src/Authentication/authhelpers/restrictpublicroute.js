import React from "react"
import { isAuthenticated } from "./authhelper"
import { Route, Redirect } from "react-router-dom"


const PublicRouteRestriction = ({ component: Component, ...rest }) => {
    return (<Route
        {...rest}
        render={
            (props) => !isAuthenticated() ? (
                <Component {...props} />
            ) : (
                    <Redirect to="/" />
                )
        }
    />
    )
}

export default PublicRouteRestriction