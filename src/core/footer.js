/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

function footer(props) {
    return (
        <div id="#about" data-section="about">
            <footer className="footer d-flex align-items-center justify-content-center">
      <div className="container pt-4 pb-4 text-white">
        <div className="row d-flex justify-content-around">
          <div className="col-md-5 m-3">
            <h1 className="portfolio-author-address text-uppercase text-center">
              Address
            </h1>
            <hr style={{backgroundColor: "#dae0e2"}} />
            <div
              className="container-fluid d-flex flex-column justify-content-center align-items-center"
            >
              {/* <!-- <div className="custom-line-address-white"> */}
                {/* </div> --> */}
              <div className="address adjust-address-font">
                7 number burnpur road near Police line
              </div>
              <div className="city">
                Asansol
              </div>
              <div className="pin">
                713304
              </div>
            </div>
          </div>
          <div className="col-md-5 m-3 ml-4">
            <h1 className="portfolio-author-address text-uppercase text-center">
              Social media handles
            </h1>
            <hr style={{backgroundColor: "#dae0e2"}} />
            {/* <!-- <div className="custom-line-social-white mb-4"> --> */}
            <div
              className="container-fluid d-flex flex-row justify-content-around align-items-center p-2"
            >
              {/* // eslint-disable-next-line jsx-a11y/anchor-has-content */}
              <a
                className="btn btn-outline-primary m-2"
                href="https://www.facebook.com/satyam.prince.100"
                role="button"
                style={{borderRadius: "50%"}}
                target="_blank"
                ><i className="fa fa-facebook-square" aria-hidden="true"></i
              ></a>
              <a
                className="btn btn-outline-danger m-2"
                href="https://www.youtube.com/channel/UCxG7_4NwPnxA5FDe_dUGqYA?view_as=subscriber"
                role="button"
                style={{borderRadius: "50%"}}
                target="_blank"
                ><i className="fa fa-youtube-play" aria-hidden="true"></i
              ></a>
              <a
                className="btn btn-outline-info"
                href="https://www.instagram.com/codersdontquit123/"
                role="button"
                style={{borderRadius: "50%"}}
                target="_blank"
                ><i className="fa fa-instagram" aria-hidden="true"></i
              ></a>
              <a
                className="btn btn-outline-light"
                href="https://www.linkedin.com/in/satyam-sinha-aa5a57161/"
                role="button"
                style={{borderRadius: "50%"}}
                target="_blank"
                ><i className="fa fa-linkedin-square" aria-hidden="true"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <nav
      className="navbar sticky-bottom navbar-dark bg-dark d-flex justify-content-center align-items-center text-white adjust-credit-font"
    >
      <div className="text-center">
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik"
          >Freepik</a
        >
        from
        <a href="https://www.flaticon.com/" title="Flaticon"
          >www.flaticon.com</a
        >
      </div>
    </nav>
        </div>
    );
}

export default footer;