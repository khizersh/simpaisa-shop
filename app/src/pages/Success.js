import React from "react";
import "../modules/success/success.style.css";
import SuccessCard from "../modules/success/successCard";
import banner from "../images/PUBG-Banner.png";

const Success = () => {
  return (
    <div className="container-fluid banner-container p-0">
      <div className="row">
        <div className="col-12">
          <a>
            <img src={banner} width="100%" />
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
                className="UCs-form-input"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                type="text"
                maxLength="20"
              />
              <span className="circleCopy">
                <svg
                  version="1.1"
                  // style="width: 22px;"
                  style={{ width: 22 }}
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 448 512"
                  xmlSpace="preserve"
                >
                  <path
                    fill="currentColor"
                    d="M297.96,114.3V5H23.07v392.7h126.97V507h274.89V114.3H297.96z M42.77,376.1V26.6h235.49v87.7H150.04v261.8H42.77z
                                M405.23,485.4H169.74V135.9h235.49V485.4z"
                    className="fa-primary"
                  ></path>
                </svg>
              </span>
              <p className="UCs-form__field-instruction-text">
                To redeem your code, visit Midasbuy Page. Enter your Players ID
                and Voucher, and click on the box that says "redeem Code".
                <br />
                If you have any questions, please contact our Customer Service
                at support <span> &nbsp; customerservices@easypaisa.com</span>
              </p>
              <div className="UCs-order__title text-left">
                Your order summary
              </div>
              <SuccessCard />
            </div>
          </h6>
        </div>
        <div className="col-12">
          <div className="UCs-btn-field-wrapper single-btn-form">
            <button className="UCs-btn">CONFIRM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
