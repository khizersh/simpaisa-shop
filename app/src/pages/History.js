import React, { Fragment } from "react";
import "../modules/history/history.style.css";
import HistoryCard from "../modules/history/HistoryCard";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <Fragment>
      <div className="header">
        <Link className="back-shop btn my-2 ml-2" to="/">
          <i className="fas fa-arrow-alt-from-right"></i> Back to Shop
        </Link>
      </div>
      <div className="container-fluid history-container">
        <div className="border text-center  bg-green text-white mt-3">
          <div className="cont p-2">
            <h4 className="font">
              <b>My Vouchers</b>
            </h4>
          </div>
        </div>

        <div className="mt-4">
          <HistoryCard />
        </div>
      </div>
    </Fragment>
  );
};

export default History;
