import React from "react";
import "./success.style.css";

const successCard = () => {
  return (
    <div className="UCs-order-summary text-left">
      <div className="UCs-order">1 x PUBG Mobile UC Redeem Code 60UC</div>
      <div className="summary-center">
        <div className="UCs-order-detail">
          <span className="UCs-order-detail-span">Payment Method:</span>{" "}
          <span>Telenor</span>
        </div>
        <div className="UCs-order-detail">
          <span className="UCs-order-detail-span">Payment Status:</span>{" "}
          <span> Fulfilled</span>
        </div>
        <div className="UCs-order-detail">
          <span className="UCs-order-detail-span">Total Price:</span>{" "}
          <span> Rs xxx</span>
        </div>
      </div>
    </div>
  );
};

export default successCard;
