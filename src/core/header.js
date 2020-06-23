import React from "react";
import Avatar from "../Images/people.png";
import { HideToggler, HandleBrandToggeler } from "../script";
import { isAuthenticated } from "../Authentication/authhelpers/authhelper";
function header(props) {

  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-4"
        id="navbar"
        data-section="root"
      >
        <div className="container">
          <a
            className="navbar-brand font"
            id="brand"
            href="/"
            data-nav-section="root"
            onClick={() => {
              HideToggler()
            }}
          >
            Satyam sinha
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto font-link" id="navlinks">
              <li className="nav-item active" onClick={HideToggler}>
                <a className="nav-link" href="#portfolio" >
                  Portfolio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active" >
                <a
                  className="nav-link"
                  href="#about"
                  data-nav-section="about"
                  onClick={() => {
                    HideToggler()
                  }}
                >
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#contact" onClick={HideToggler}>
                  Contact<span className="sr-only">(current)</span>
                </a>
              </li>
              {
                !isAuthenticated() && (
                  <li className="nav-item active">
                    <a className="nav-link" href="/signin" onClick={HideToggler}>
                      Signin<span className="sr-only">(current)</span>
                    </a>
                  </li>
                )
              }
              {
                !isAuthenticated() && (
                  <li className="nav-item active">
                    <a className="nav-link" href="/signup" onClick={HideToggler}>
                      Signup<span className="sr-only">(current)</span>
                    </a>
                  </li>
                )
              }
              {
                isAuthenticated() && (
                  <li className="nav-item active">
                    <a className="nav-link" href="#contact" onClick={HideToggler}>
                      Signout<span className="sr-only">(current)</span>
                    </a>
                  </li>
                )
              }

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default header;
