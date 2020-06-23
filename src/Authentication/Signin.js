import React, { useState } from 'react';
import Header from '../core/header';
import Footer from '../core/footer';

let Signin = (props) => {
    return (
        <div >
            <Header />
            <div style={{ marginTop: "200px", marginBottom: "100px" }}>
                <h1 className="portfolio-heading text-uppercase text-center">Signin</h1>
                <form className="container">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group p-2">
                                <input type="email" className="form-control textbox-styling" id="email address" placeholder="Your Email Address" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <div className="form-group p-2">
                                <input type="password" required className="form-control textbox-styling" id="confirm password" placeholder="Your Password" required />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 offset-2">
                            <button className="btn btn-outline-dark btn-md btn-block">
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