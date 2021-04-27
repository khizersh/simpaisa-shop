import React from "react";
import "./footer.style.css";
import support from "../../images/time.png";
import easy from "../../images/pay_in_seconds.png";
import delivery from "../../images/fast_delivery.png";
import promo from "../../images/fast_delivery.png";

const FooterAbout = () => {
  return (
    <div className="simpaisa-about-container">
      <div className="max-width">
        <div className="simpaisa-about__header">
          {" "}
          Why top up games on easypaisa shop?{" "}
        </div>
        <div className="simpaisa-about__short-description">
          {" "}
          Millions of gamers count on easypaisa shop every month for a seamless
          purchase experience when buying game credits or vouchers.
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mt-4">
            <div className="simpaisa-about__card__icon-area">
              <img
                className="simpaisa-about__icon-card"
                src={support}
                alt="Quick icon"
                id="simpaisa-about__card__icon-style"
              />
            </div>
            <div className="simpaisa-about__card-content">
              <div className="simpaisa-about__card__title-area about-title">
                Easy and Fast
              </div>
              <div className="simpaisa-about__card__desc-area">
                It only takes a few seconds to complete a purchase on easypaisa
                shop.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <div className="simpaisa-about__card__icon-area">
              <img
                className="simpaisa-about__icon-card"
                src={easy}
                alt="Delivery icon"
                id="simpaisa-about__card__icon-style"
              />
            </div>
            <div className="simpaisa-about__card-content">
              <div className="simpaisa-about__card__title-area about-title">
                Instant Delivery
              </div>
              <div className="simpaisa-about__card__desc-area">
                When you buy a voucher or top-up on easypaisa shop, your
                purchase is delivered immediately once as your payment is
                complete.
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <div className="simpaisa-about__card__icon-area">
              <img
                className="simpaisa-about__icon-card"
                src={delivery}
                alt="Customer support"
                id="simpaisa-about__card__icon-style"
              />
            </div>
            <div className="simpaisa-about__card-content">
              <div className="simpaisa-about__card__title-area about-title">
                Customer Support
              </div>
              <div className="simpaisa-about__card__desc-area">
                Our support team is available from 10 am to 11 pm, 7 days a
                week. Submit our <a href="#"> Support Request Form </a> and we
                will get right back to you!
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <div className="simpaisa-about__card__icon-area">
              <img
                className="simpaisa-about__icon-card"
                src={promo}
                alt="Promo icon"
                id="simpaisa-about__card__icon-style"
              />
            </div>
            <div className="simpaisa-about__card-content">
              <div className="simpaisa-about__card__title-area about-title">
                Exciting Promotions
              </div>
              <div className="simpaisa-about__card__desc-area">
                Keep a lookout for the best deals for your favourite games with
                easypaisa shop promotions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterAbout;
