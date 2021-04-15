import React from "react";
import "../modules/success/success.style.css";
import SuccessCard from "../modules/success/successCard";

const Success = () => {
  return (
    <div className="container-fluid banner-container">
      <div className="row">
        <div className="col-12">
          <a>
            <img
              src="http://shop.simpaisa.com/assets/img/slider/PUBG-Banner.png"
              width="100%"
            />
          </a>
        </div>
        <div className="col-12">
          <div className="ucs w-100">
            60
            <span className="pl-3" style={{ color: "#333" }}>
              PUBG UCS
            </span>
          </div>
        </div>
        <div className="col-12">
          <h6 className="text-center mt-2">
            Your PUBG Mobile UC Redeem Code for 60uc is
            <div className=" text-center">
              <input
                class="UCs-form-input"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                type="text"
                maxlength="20"
              />
              <span class="circleCopy"></span>
              <p class="UCs-form__field-instruction-text">
                To redeem your code, visit Midasbuy Page. Enter your Players ID
                and Voucher, and click on the box that says "redeem Code".
                <br />
                If you have any questions, please contact our Customer Service
                at support <span> &nbsp; customerservices@easypaisa.com</span>
              </p>
              <div class="UCs-order__title text-left">Your order summary</div>
              <SuccessCard />
            </div>
          </h6>
        </div>
        <div className="col-12">
          <div class="UCs-btn-field-wrapper single-btn-form">
            <button class="UCs-btn">CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
