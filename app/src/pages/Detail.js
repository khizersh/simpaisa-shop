import React from "react";
import ConfirmPayment from "../modules/detail/ConfirmPayment";
import "../modules/detail/detail.style.css";
import SectionVoucher from "../modules/detail/SectionVoucher";

const Detail = () => {
  return (
    <div className="container-fluid container-custom">
      <div className="row">
        <div className="col-12 col-md-5 ">
          <img
            src="http://shop.simpaisa.com/assets/img/omlet.png"
            width="100%"
          />
          <h2 className="product-title">PUBG Battlegrounds</h2>
          <article className="product__description">
            <p className="desc">
              Buy PUBG UC in seconds! Just enter your PUBG ID, select the value
              of Tokens you wish to purchase, complete the payment, and the buy
              and you will get PUBG UC on screen and via SMS.
            </p>
            <p>
              <strong>Pay with convenience using Easypaisa only!</strong>{" "}
            </p>
          </article>
        </div>
        <div className="col-12 col-sm-7">
          <div className="card shadow p-3">
            <h2 class="circle">
              <span>1</span>
              Enter ID
            </h2>
            <div className="mt-3">
              <input
                className="userid form-input"
                type="text"
                placeholder="Enter ID"
              />
            </div>
            <p className="form__field-instruction-text">
              PUBG ID is your nickname in PUBG. If you’re not sure how to spell
              it correctly please open PUBG, click on your profile and check it
              under your profile picture.
            </p>
          </div>

          <div className="mt-4">
            <SectionVoucher />
          </div>
          <div className="mt-4">
            <ConfirmPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;