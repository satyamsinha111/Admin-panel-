import React from "react"
import { isAuthenticated } from "./authhelper"
import { Route,Redirect} from "react-router-dom"


const PrivateRoute = ({component:Component,...rest})=>{
   return (
       <Route
       {...rest}
       render={(props)=>
          isAuthenticated() && isAuthenticated().user.role===1 ? (
              <Component {...props} />
          ) : (
              <Redirect to="/" />
          )
        }
       />
   )
}


export default PrivateRoute