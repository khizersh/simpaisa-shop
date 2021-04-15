import React, { Fragment } from "react";
import HomePageSlider from "../modules/home/HomePageSlider";
import "../modules/home/home.style.css";
import HomePageCard from "../modules/home/HomePageCard";
import FooterAbout from "../modules/footer/FooterAbout";
import Footer from "../modules/footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Fragment>
      <div className="home-width">
        <div className="text-right mb-2">
          <Link to="history" className="btn btn-success">
            My Vouchers
          </Link>
        </div>

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
