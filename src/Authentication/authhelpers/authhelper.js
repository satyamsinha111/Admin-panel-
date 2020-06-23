import { API_URL } from "../../Backend"

export const userSignup = (user) => {
    return fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log("SIGNUP SERVER ERROR", err)
        })
}

export const userSignin = (user) => {
    return fetch(`${API_URL}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
    })
        .then(
            response => {
                return response.json();
            }
        )
        .catch(
            error => {
                console.log("SIGNIN SERVER ERROR", error)
            }
        )
}

export const Signout = (next) => {
    if (typeof window != undefined) {
        localStorage.removeItem("usertoken")
        next()
        return fetch(`${API_URL}/signout`, {
            method: "GET",
        })
            .then(
                response => {
                    console.log(response.json())
                }
            )
            .catch(err => {
                console.log("SIGNOUT ERROR", err)
            })

    }
}


export const AuthenticateUser = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("usertoken", data)
        next();
    }
}

export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
    }
    if (localStorage.getItem("usertoken")) {
        return JSON.stringify(localStorage.getItem("usertoken"))
    }
    else {
        return false
    }
}