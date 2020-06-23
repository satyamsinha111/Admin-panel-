import React, { useState } from 'react';
import Header from '../core/header';
import Footer from '../core/footer';
import { userSignup } from "./authhelpers/authhelper"
let Signup = (props) => {
    let [firstName, setFirstName] = useState("")
    let [secondName, setSecondName] = useState("")
    let [Proffession, setProffession] = useState("")
    let [Company, setCompany] = useState("")
    let [emailAddress, setEmailAddress] = useState("")
    let [password, setPassword] = useState("")
    let [confirmPassword, setConfirmPassword] = useState("")
    let [success, setSuccess] = useState(false)
    let [error, setError] = useState("")
    let [loading, setLoading] = useState(false)


    //Handles first name
    let handleFirstName = (event) => {
        event.preventDefault()
        setFirstName(event.target.value)
    }

    //handles second name
    let handleSecondName = (event) => {
        event.preventDefault()
        setSecondName(event.target.value)
    }

    //handles company
    let handleCompanyName = (event) => {
        event.preventDefault()
        setCompany(event.target.value)
    }

    //handles proffession
    let handleProffession = (event) => {
        event.preventDefault()
        setProffession(event.target.value)
    }

    //handles email
    let handleEmail = (event) => {
        event.preventDefault()
        setEmailAddress(event.target.value)
    }

    //handles password
    let handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }

    //handles the confirm password
    let handleConfirmPassword = (event) => {
        event.preventDefault()
        setConfirmPassword(event.target.value)
    }

    //signup handling
    let handleSignup = (event) => {
        event.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError(false)
        let newUser = {
            first_name: firstName,
            second_name: secondName,
            company_name: Company,
            proffession: Proffession,
            email_address: emailAddress,
            password: confirmPassword
        }
        userSignup(newUser)
            .then(
                data => {
                    if (data.error) {
                        setError(data.error)
                        setLoading(false)
                        setSuccess(false)
                        setFirstName("")
                        setSecondName("")
                        setCompany("")
                        setProffession("")
                        setPassword("")
                        setConfirmPassword("")
                        setEmailAddress("")
                        return
                    }
                    setSuccess(true)
                    setLoading(false)
                    setError(false)
                    setFirstName("")
                    setSecondName("")
                    setCompany("")
                    setProffession("")
                    setPassword("")
                    setConfirmPassword("")
                    setEmailAddress("")
                }
            )
            .catch()
    }

    return (
        <div>
            <Header />
            <div style={{ marginTop: "200px", marginBottom: "50px" }}>
                <h1 className="portfolio-heading text-uppercase text-center">Signup</h1>
                <form className="container">
                    {error && (
                        <div class="alert alert-danger" role="alert">
                            Error signing up
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
                                Signed up successfully
                            </div>
                        )
                    }
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group p-2">
                                <input type="text" className="form-control textbox-styling" id="first_name" placeholder="First name"
                                    value={firstName}
                                    onChange={handleFirstName}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group p-2">
                                <input type="text" className="form-control textbox-styling" id="second_name" placeholder="Second name"
                                    value={secondName}
                                    onChange={handleSecondName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group p-2">
                                <input type="text" className="form-control textbox-styling" id="proffession_name" placeholder="Your proffession"
                                    value={Proffession}
                                    onChange={handleProffession}
                                />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group p-2">
                                <input type="text" className="form-control textbox-styling" id="company_name" placeholder="Your company"
                                    value={Company}
                                    onChange={handleCompanyName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group p-2">
                                <input type="email" className="form-control textbox-styling" id="email address" placeholder="Your Email Address" required
                                    value={emailAddress}
                                    onChange={handleEmail}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group p-2">
                                <input type="password" required className="form-control textbox-styling" id="password" placeholder="Your Password" required
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group p-2">
                                <input type="password" required className="form-control textbox-styling" id="confirm password" placeholder="Please Confirm your password" required
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-outline-dark btn-md btn-block"
                        onClick={handleSignup}
                    >
                        Sign up
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Signup