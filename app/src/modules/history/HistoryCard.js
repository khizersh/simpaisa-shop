import React from "react";
import "./history.style.css";
import { Link } from "react-router-dom";

const HistoryCard = () => {
  return (
    <div className="card border-round mt-2 mb-1">
      <div className="container">
        <div className="mx-2">
          <h3 className="text-muted mb-0 text-center pb-2">
            <b>1 x PUBG Mobile UC Redeem Code 60UC</b>
          </h3>

          <div className="text-center text-muted">
            <div>
              Payment Method: <span className="pl-2">Easypaisa</span>
            </div>
            <div>
              Payment Status: <span className="pl-2">Fulfilled</span>
            </div>
            <div>
              Total Price: <span className="pl-2">Rs xxx</span>
            </div>
          </div>
        </div>

        <div className="text-muted mt-1 text-right show-detail">
          <span className="badge">
            <Link to="success">Show detail</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
