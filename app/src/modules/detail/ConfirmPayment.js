import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./detail.style.css";
import "./detailPayment.css";

const ConfirmPayment = ({ image }) => {
  const router = useHistory();
  const array = [
    { id: 1, title: "70 Tokens" },
    { id: 2, title: "720 Tokens" },
    { id: 3, title: "350 Tokens" },
    { id: 4, title: "750 Tokens" },
    { id: 5, title: "1440 Tokens" },
    { id: 6, title: "3600 Tokens" },
  ];
  const [token, setToken] = useState(null);

  const onClick = (m) => {
    setToken(m);
  };

  const onClickPay = () => {
    // if user register then call simpaisa api to initiate transaction which
    //  return paymentTransactionId which will pass in mp.createPayment(id)
    router.push("/success");
  };

  useEffect(() => {
    setToken(array[0]);
  }, []);

  return (
    <div className="card shadow p-3">
      <h2 className="circle">
        <span>2</span>
        Confirm Payment
      </h2>

      <div className="ul-paymentChannels">
        <div id="paymentChannel_61" className="payment-channel-element active">
          <div className="payment-channel-link">
            <input type="hidden" name="displayName" value="Telenor" />
            <span className="element-check-label"></span>

            <div className="payment-channel-container">
              <figure
                className="payment-logo-container"
                // style=" display: flex; line-height: 38px; "
                style={{ display: "flesx", lineHeight: "38px" }}
              >
                <img className="logo" src={image} alt="Easypasia_PK logo" />
              </figure>
            </div>

            <div className="payment-price-container">
              <div className="price_label" id="priceLabel_61">
                PRICE
              </div>
              <div className="price pr" id="priceInfo_61">
                ₨ 160
              </div>
            </div>
            <div
              className="email-input-container"
              style={{
                display: "flex",
                width: "100%",
                margin: "10px 20px 20px 20px",
              }}
            >
              <input
                type="number"
                id="number"
                name="mobileNumber"
                className="number-form-input"
                placeholder="Enter your mobile number"
              />
              <button
                className="number-form-btn__submit btn"
                onClick={onClickPay}
              >
                Pay Now
              </button>
            </div>
            <div className="payment-tagline-container">
              <p className="payment-tagline" id="payment-channel__tagline_61">
                Pay with your Easypasia Account
              </p>
            </div>
            <div className="best-deal-label"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPayment;
