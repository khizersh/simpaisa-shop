import React, { Fragment, useEffect } from "react";
import HomePageSlider from "../modules/home/HomePageSlider";
import "../modules/home/home.style.css";
import HomePageCard from "../modules/home/HomePageCard";
import FooterAbout from "../modules/footer/FooterAbout";
import Footer from "../modules/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  useEffect(() => {
    // here we call inquire user info api (easypaisa)
    // if already reg set cookies else call
  }, []);

  return (
    <Fragment>
      <div className="text-right  header">
        <Link to="history" className="btn btn-success my-2 mr-1">
          My Vouchers <i class="fas fa-sign-in-alt"></i>
        </Link>
      </div>
      <div className="home-width">
        <HomePageSlider />
        <div className="mt-4">
          <h1 className="category__title">DIRECT TOP-UP</h1>
          <div className="row px-2">
            {array.map((m) => (
              <HomePageCard key={m} />
            ))}
          </div>
        </div>
      </div>
      <FooterAbout />
      <Footer />
    </Fragment>
  );
};

export default Home;
