import React from "react";
import "../script";
import "../style.css";
import Portfolio from "../Images/portfolio.PNG";
import Youtube from "../Images/youtube.PNG";
import Img1 from "../Images/img1.png";
import Hitesh from "../Images/hiteshbootcamp.PNG";
import Avatar from "../Images/people.png";

function body(props) {
  
  return (
    <div>
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
      <section className="portfolio pt-4" id="portfolio">
        <div className="container d-flex flex-column align-items-center portfolio-content text-dark pt-4 pb-4">
          <h1 className="portfolio-heading text-uppercase">Portfolio</h1>
          <div className="divider d-flex flex-row mb-4">
            <div className="custom-line-black"></div>
            <div className="custom-icon mx-3">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="custom-line-black"></div>
          </div>
          <div className="portfolio-gallery container">
            <div className="row">
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">E-Commerce application</div>
                    <div className="project-time mt-2 description">
                      Took me around a month
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://myteesshop.herokuapp.com/"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">Youtube channel</div>
                    <div className="project-time mt-2 description">
                      Watch some of my videos
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://www.youtube.com/watch?v=iE4gMuMkMj4&t=48s"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">Portfolio website</div>
                    <div className="project-time mt-2 description">
                      Under progress
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://satyamsinha.netlify.app/"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">E-Commerce application</div>
                    <div className="project-time mt-2 description">
                      Created in the bootcamp of LCO
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://teesshop.herokuapp.com/"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">Side navbar</div>
                    <div className="project-time mt-2 description">
                      Made side navbar from scratch(incomplete)
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://modest-yalow-a30d45.netlify.app/#"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="wrapper">
                  <img
                    className="img-portfolio"
                    src={Img1}
                    alt=""
                    srcset=""
                  />
                  <div className="overlay d-flex flex-column justify-content-center align-items-center">
                    <div className="project-name">My coding styles</div>
                    <div className="project-time mt-2 description">
                      have a look on my sample codes in github
                    </div>
                    <div className="project-link mt-3">
                      <a
                        className="btn btn-sm btn-outline-light"
                        href="https://github.com/satyamsinha111"
                      >
                        Link to project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> --> */}
      </section>
      <section className="about pt-4" id="about">
        <div className="container d-flex flex-column align-items-center portfolio-content text-white pt-4 pb-4">
          <h1 className="portfolio-heading text-uppercase">About</h1>
          <div className="divider d-flex flex-row mb-4">
            <div className="custom-line-white"></div>
            <div className="custom-icon mx-3">
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
              <i className="fa fa-star" aria-hidden="true"></i>
            </div>
            <div className="custom-line-white"></div>
          </div>
        </div>
        <div className="portfolio-about container text-white pt-4 pb-4">
          <div className="row">
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
              accusantium laudantium nulla necessitatibus nesciunt, incidunt
              voluptates distinctio perferendis quia totam sapiente sed
              reprehenderit molestiae officiis commodi asperiores porro velit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              temporibus aspernatur, cumque ex amet harum! Adipisci, nesciunt?
              Ipsa nesciunt eos saepe aliquam atque beatae repellendus
              asperiores, consequuntur quibusdam nemo! Labore. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Corporis voluptates qui
              fuga officiis nam nesciunt ipsum id, quas adipisci sapiente
              tempore exercitationem necessitatibus itaque at praesentium?
              Dolor, nobis. Nobis, sunt. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Saepe tenetur eum quis maxime doloremque
              quisquam excepturi labore, voluptates accusamus quibusdam quos
              porro magnam earum dignissimos sint numquam facere. Impedit,
              provident?
            </div>
            <div className="col-md-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam eius
              accusantium laudantium nulla necessitatibus nesciunt, incidunt
              voluptates distinctio perferendis quia totam sapiente sed
              reprehenderit molestiae officiis commodi asperiores porro velit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              temporibus aspernatur, cumque ex amet harum! Adipisci, nesciunt?
              Ipsa nesciunt eos saepe aliquam atque beatae repellendus
              asperiores, consequuntur quibusdam nemo! Labore. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Corporis voluptates qui
              fuga officiis nam nesciunt ipsum id, quas adipisci sapiente
              tempore exercitationem necessitatibus itaque at praesentium?
              Dolor, nobis. Nobis, sunt. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Saepe tenetur eum quis maxime doloremque
              quisquam excepturi labore, voluptates accusamus quibusdam quos
              porro magnam earum dignissimos sint numquam facere. Impedit,
              provident?
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
      <div
        className="container d-flex flex-column align-items-center portfolio-content text-dark pt-4 pb-4"
      >
        <h1 className="portfolio-heading text-uppercase">Contact</h1>
        <div className="divider d-flex flex-row mb-4">
          <div className="custom-line-black"></div>
          <div className="custom-icon mx-3">
            <i className="fa fa-star" aria-hidden="true"></i
            ><i className="fa fa-star" aria-hidden="true"></i
            ><i className="fa fa-star" aria-hidden="true"></i>
          </div>
          <div className="custom-line-black"></div>
        </div>
        <form className="container">
          <div id="success" className="alert alert-success d-none" role="alert">
            Message sent to satyam
          </div>
          <div id="failure" className="alert alert-success d-none" role="alert">
            Some error occured
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- <label for="first-name">First name:</label> --> */}
                <input
                  type="text"
                  className="form-control textbox-styling"
                  id="first-name"
                  aria-describedby="first-name"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- <label for="second-name">Second name:</label> --> */}
                <input
                  type="text"
                  className="form-control textbox-styling"
                  id="second-name"
                  aria-describedby="second-name"
                  placeholder="Second Name"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- <label for="company-name">Company name:</label> --> */}
                <input
                  type="text"
                  className="form-control textbox-styling"
                  id="company-name"
                  aria-describedby="company-name"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                {/* <!-- <label for="email-address">Email address:</label> --> */}
                <input
                  type="text"
                  className="form-control textbox-styling"
                  id="email-address"
                  aria-describedby="email-address"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                {/* <!-- <label for="message">Your message to Satyam:</label> --> */}
                <textarea className="form-control textbox-styling" id="message" rows="3"
                placeholder="Message to Satyam"
                ></textarea>
              </div>
            </div>
          </div>
          <button
            type="submit"
            id="send"
            className="btn btn-outline-dark btn-block"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    </div>
  );
}

export default body;
