import React, { useState, useEffect } from "react";
import {} from "../helper/adminhelper";
import $ from "jquery";
const Portfolio = (props) => {
  let [file, SetFile] = useState({});
  let [name, setName] = useState("");
  let [link, setLink] = useState("");
  let [desc, setDesc] = useState("");
  let [imgName, setImgName] = useState("");

  let UploadFile = (event) => {
    event.preventDefault();
    $("#uploadFile").click();
    console.log(document.getElementById("uploadFile").files);
    console.log(document.getElementById("uploadFile").files[0]);
  };

  let handleFile = (event) => {
    event.preventDefault();
    SetFile(event.target.value);
  };

  let handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  let handleLink = (event) => {
    event.preventDefault();
    setLink(event.target.value);
  };

  let handleDesc = (event) => {
    event.preventDefault();
    setDesc(event.target.value);
  };

  useEffect(() => {
    console.log("hello");
    $("#uploadFile").click();
  }, []);

  return (
    <div>
      <form className="container" method="POST" encType="multipart/form-data">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <input
              type="text"
              className="form-control mt-3"
              placeholder="Please upload your amazing portfolio image"
              value={imgName}
              disabled
              onChange={(event) => {
                console.log("hello");
                console.log(event.target);
              }}
            />
          </div>
          <div className="col-md-4 col-sm-12">
            <input
              type="file"
              className="hidden"
              id="uploadFile"
              name="photo"
              accept="image"
              onClick={(event) => {
                console.log(event.target.files);
              }}
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
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div class="form-group p-3">
              <button type="button" class="btn btn-block btn-outline-dark">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Portfolio;
