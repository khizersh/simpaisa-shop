import React, { Fragment } from "react";
import "../modules/history/history.style.css";
import HistoryCard from "../modules/history/HistoryCard";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <Fragment>
      <div className="header">
        <Link class="back-shop btn my-2 ml-2" to="/">
          <i class="fas fa-arrow-left"></i> Back to Shop
        </Link>
      </div>
      <div class="container-fluid history-container">
        <div class="border text-center  bg-green text-white mt-3">
          <div class="cont p-2">
            <h4 class="font">
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
