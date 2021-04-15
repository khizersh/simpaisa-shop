import React from "react";
import "../modules/history/history.style.css";
import HistoryCard from "../modules/history/HistoryCard";
import { Link } from "react-router-dom";

const History = () => {
  return (
    <div class="container-fluid history-container">
      <Link class="back-shop btn" to="/">
        Back to shop
      </Link>
      <div class="card text-center  bg-green text-white mt-3">
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
  );
};

export default History;
