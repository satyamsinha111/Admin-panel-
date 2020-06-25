import React, { useState,useEffect } from 'react';
import Header from '../core/header';
import Footer from '../core/footer';
import { userSignin, AuthenticateUser } from '../Authentication/authhelpers/authhelper'
import { Redirect } from 'react-router-dom';

let Signin = (props) => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [loading, setLoading] = useState(false)
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState("")
    let [redirect,setRedirect]=useState(false)

    

    let handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    let handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    let SigninUser = (event) => {
        event.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError("")
        let User = {
            email_address: email,
            password: password
        }
        userSignin(User)
            .then(
                
                data => {
                    console.log(data)
                    if (data.error) {
                        setLoading(false)
                        setSuccess(false)
                        setError(data.error)
                        return
                    }
                    AuthenticateUser(data, () => {
                        setLoading(false)
                        setSuccess(true)
                        setError("")
                        setEmail("")
                        setPassword("")
                        return
                    })
                }
            )
            .catch(error => console.log("!!!SIGNIN ERROR!!!!!!!!!!!!!!!!!!!!",error))
        setInterval(() => {
            setLoading(false)
            setSuccess(false)
            setError(false)
            setRedirect(true)
        }, 3000);
    }


    return (
        <div >
            <Header/>
            <div style={{ marginTop: "200px", marginBottom: "100px" }}>
                <h1 className="portfolio-heading text-uppercase text-center">Signin</h1>
                <form className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            {error && (
                                <div class="alert alert-danger" role="alert">
                                    Error signing in
                                </div>
                            )}
                            {
                                loading && (
                                    <div class="spinner-border m-5" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                )
                            }
                            {
                                success && (
                                    <div class="alert alert-success" role="alert">
                                        Signed in successfully
                                        
                                    </div>
                                )
                            }
                            {
                                redirect && <Redirect to="/" />
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group p-2">
                                <input type="email" className="form-control textbox-styling" id="email address" placeholder="Your Email Address" required
                                    value={email}
                                    onChange={handleEmail}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group p-2">
                                <input type="password" required className="form-control textbox-styling" id="confirm password" placeholder="Your Password" required
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-outline-dark btn-md btn-block"
                                onClick={SigninUser}
                            >
                                Sign in
                    </button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signin