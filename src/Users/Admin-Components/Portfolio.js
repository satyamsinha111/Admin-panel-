import React, { useState, useEffect } from "react";
import { CreatePortfolio } from "../helper/adminhelper";
import $ from "jquery";
import { isAuthenticated } from "../../Authentication/authhelpers/authhelper";

const Portfolio = (props) => {
  const { user, token } = isAuthenticated();
  let [values, setValues] = useState({
    portfolio_name: "",
    portfolio_link: "",
    portfolio_description: "",
    photo: "",
    success: false,
    redirect: false,
    formData: "",
    loading: false,
    error: "",
    success: false,
  });

  const {
    portfolio_name,
    portfolio_link,
    portfolio_description,
    photo,
    success,
    redirect,
    formData,
    error,
    loading,
  } = values;

  let preload = () => {
    setValues({ ...values, formData: new FormData() });
  };

  useEffect(() => {
    preload();
  }, []);
  let UploadFile = (event) => {
    event.preventDefault();
    $("#uploadFile").click();
  };

  const handleChange = (name) => (event) => {
    const value = name == "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = user.userId;
    const authToken = token;
    setValues({ ...values, success: false, loading: true });
    CreatePortfolio(userId, token, formData).then((data) => {
      if (data.status === 400) {
        setValues({
          ...values,
          success: false,
          loading: false,
          error: "Bad request",
        });
        setTimeout(() => {
          setValues({ ...values, error: "" });
        }, 5000);
        return;
      }
      if (data.error) {
        console.log("Error");
        setValues({
          ...values,
          success: false,
          loading: false,
          error: data.error,
        });
      } else {
        console.log("Success");
        setValues({
          ...values,
          success: true,
          error: "",
          loading: false,
        });
      }
      setTimeout(() => {
        console.log("Interval");
        setValues({
          ...values,
          portfolio_name: "",
          portfolio_link: "",
          portfolio_description: "",
          photo: null,
          error: "",
        });
      }, 5000);
      //setValues({ ...values, redirect: true, formData: new FormData() });
    });
  };

  return (
    <div>
      <form className="container" method="POST" encType="multipart/form-data">
        {loading && (
          <div className="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {success && (
          <div class="alert alert-success" role="alert">
            Portfolio added successfully
          </div>
        )}
        {error && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="row">
          <div className="col-12">
            <input
              type="file"
              className="hidden"
              id="uploadFile"
              name="photo"
              accept="image"
              onChange={handleChange("photo")}
            />
            <div
              className="btn btn-block btn-outline-info mt-3"
              id="uploadTrigger"
              onClick={UploadFile}
            >
              Upload File
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group p-3">
              <input
                type="text"
                className="form-control textbox-styling "
                placeholder="Please enter the name of your project"
                value={portfolio_name}
                onChange={handleChange("portfolio_name")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group px-3">
              <input
                type="text"
                className="form-control textbox-styling "
                placeholder="Please enter the link of your project"
                value={portfolio_link}
                onChange={handleChange("portfolio_link")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group p-3">
              <textarea
                className="form-control textbox-styling "
                placeholder="Enter the project description"
                rows="3"
                onChange={handleChange("portfolio_description")}
                value={portfolio_description}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group p-3">
              <button
                type="button"
                class="btn btn-block btn-outline-dark"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <p>{portfolio_description}</p>
      <p>{JSON.stringify(values)}</p> */}
    </div>
  );
};

export default Portfolio;
