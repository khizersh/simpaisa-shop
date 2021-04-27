import React from "react";
import Slider from "react-slick";
import "../home/home.style.css";
import slider1 from "../../images/slider1.jpg";
import slider2 from "../../images/slider2.jpg";
import slider3 from "../../images/slider3.jpg";

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

  const images = [slider1, slider2, slider3];
  return (
    <Slider {...settings}>
      {images.length &&
        images.map((m, i) => (
          <div key={i}>
            <img src={m} width="100%" />
          </div>
        ))}
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
