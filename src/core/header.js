import React from "react";
import Avatar from "../Images/people.png";
import { HideToggler,HandleBrandToggeler } from "../script";
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
            href="#root"
            data-nav-section="root"
            onClick={()=>{
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
                  onClick={()=>{
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
            </ul>
          </div>
        </div>
      </nav>
      <header className="masthead d-flex justify-content-center">
        <div className="container d-flex flex-column align-items-center masthead-content text-white">
          <img
            className="masthead-avatar mb-4"
            src={Avatar}
            alt="Avatar"
            style={{ backgroundColor: "#DAE0E2" }}
          />
          <h1 className="masthead-heading text-uppercase">Welcome coders!!!</h1>
          <div className="divider d-flex flex-row mb-4">
            <div className="custom-line-white"></div>
            <div className="custom-icon mx-3">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="custom-line-white"></div>
          </div>
          <div className="masthead-skills">
            <p className="lead text-skills">
              .Net Developer - Web designer - Mern developer
            </p>
          </div>
          <div className="masthead-contact">
            <p className="lead text-contact">
              <a
                className="btn btn-outline-light d-sm-block d-md-none"
                href="tel:8158914106"
              >
                CALL ME
              </a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default header;
