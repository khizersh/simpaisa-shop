import React from "react";
import { Link } from "react-router-dom";
import "./home.style.css";

const HomePageCard = ({ image }) => {
  return (
    <div className="col-md-3 col-sm-4 col-4 pt-2">
      <Link
        to="/detail/1"
        style={{ textDecoration: "none" }}
        className="category__product-container"
      >
        <img src={image} alt="" className="category__product-image lozad" />
        <div className="category__product-title  text-center">PUBG Mobile</div>
      </Link>
    </div>
  );
};

export default HomePageCard;
