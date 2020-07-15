import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPortfolio } from "../helper/adminhelper";

const ManagePortfolio = (props) => {
  const [portfolioList, setPortfolioList] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const preloader = () => {
    setLoading(true);
    setError("");
    setSuccess(false);
    getAllPortfolio()
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setSuccess(false);
          setLoading(false);
        } else {
          setSuccess(true);
          setError("");
          setLoading(false);
          setPortfolioList(data);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    preloader();
  }, [portfolioList]);

  return (
    <div className="container">
      <div
        className="row"
        style={{ backgroundColor: "#218F76", color: "#fff" }}
      >
        <div className="col-2 text-center border p-1">IMAGE</div>
        <div className="col-2 text-center border p-1">NAME</div>
        <div className="col-4 text-center border p-1">LINK</div>
        <div className="col-2 text-center border p-1">UPDATE</div>
        <div className="col-2 text-center border p-1">DELETE</div>
      </div>
      {portfolioList.map((portfolio, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-2 d-flex justify-content-center border p-1 align-items-center">
              <img
                src={portfolio.portfolio_photo_path}
                style={{ width: 30, height: 30 }}
              />
            </div>
            <div className="col-2 d-flex justify-content-center border p-1 align-items-center">
              {portfolio.portfolio_name}
            </div>
            <div className="col-4 d-flex justify-content-center border p-1 align-items-center">
              <a href={portfolio.portfolio_link} target="_blank">
                Click here
              </a>
            </div>
            <div className="col-2 text-center border p-1">
              <button type="button" className="btn btn-sm btn-block btn-info">
                UPDATE
              </button>
            </div>
            <div className="col-2 text-center border p-1">
              <button type="button" className="btn btn-sm btn-block btn-danger">
                DELETE
              </button>
            </div>
          </div>
        );
      })}

      {/* <p>{JSON.stringify(portfolioList)}</p> */}
    </div>
  );
};

export default ManagePortfolio;
