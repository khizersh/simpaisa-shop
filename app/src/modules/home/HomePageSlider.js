import React from "react";
import Slider from "react-slick";
import "../home/home.style.css";

const HomePageSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      <div>
        <img
          src="http://shop.simpaisa.com/assets/img/slider/pubg_ts_pk.jpg"
          width="100%"
        />
      </div>
      <div>
        <img
          src="http://shop.simpaisa.com/assets/img/slider/wwh_pl_en.jpg"
          width="100%"
        />
      </div>
    </Slider>
  );
};

export default HomePageSlider;

function SampleNextArrow(props) {
  const { className } = props;
  return <div className={className} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} />;
}
