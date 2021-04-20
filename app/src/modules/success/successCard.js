import React from "react";
import "./success.style.css";

const successCard = () => {
  return (
    <div class="UCs-order-summary text-left">
      <div class="UCs-order">1 x PUBG Mobile UC Redeem Code 60UC</div>
      <div class="summary-center">
        <div class="UCs-order-detail">
          <span class="UCs-order-detail-span">Payment Method:</span>{" "}
          <span>Telenor</span>
        </div>
        <div class="UCs-order-detail">
          <span class="UCs-order-detail-span">Payment Status:</span>{" "}
          <span> Fulfilled</span>
        </div>
        <div class="UCs-order-detail">
          <span class="UCs-order-detail-span">Total Price:</span>{" "}
          <span> Rs xxx</span>
        </div>
      </div>
    </div>
  );
};

export default successCard;
