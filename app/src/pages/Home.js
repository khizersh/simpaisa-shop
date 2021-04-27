import React, { Fragment, useEffect } from "react";
import HomePageSlider from "../modules/home/HomePageSlider";
import "../modules/home/home.style.css";
import HomePageCard from "../modules/home/HomePageCard";
import FooterAbout from "../modules/footer/FooterAbout";
import Footer from "../modules/footer/Footer";
import { Link } from "react-router-dom";
import { getProducts } from "../utils/httpService";
import pubg from "../images/pubg.jpg";
import bigo from "../images/bigo.jpg";
import tinder from "../images/tinder.png";

const Home = () => {
  const array = [{ image: pubg }, { image: bigo }, { image: tinder }];

  useEffect(async () => {
    // here we call inquire user info api (easypaisa)
    // if already reg set cookies else call

    const data = await getProducts();
    if (data != null) {
      console.log(data);
    }
  }, []);

  return (
    <Fragment>
      <div className="text-right  header">
        <Link to="history" className="btn btn-success my-2 mr-1">
          My Vouchers <i className="fas fa-sign-in-alt"></i>
        </Link>
      </div>
      <div className="home-width">
        <HomePageSlider />
        <div className="mt-4">
          <h1 className="category__title">DIRECT TOP-UP</h1>
          <div className="row px-2">
            {array.map((m, i) => (
              <HomePageCard key={i} image={m.image} />
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
