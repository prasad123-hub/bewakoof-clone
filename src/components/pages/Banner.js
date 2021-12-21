import React from "react";
import Slider from "react-slick";
import "./Banner.css";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <>
      <div className="grid">
        <Slider {...settings}>
          <div className="grid-item">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/plain-printed-hero-banner-men-1636697725.jpg"
              alt="#"
              style={{ width: "550px" }}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Anime-Bewakoof-Homepage-HeroBanner-men-new-1635493883.jpg"
              alt="#"
              style={{ width: "550px" }}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Good-Jeans-Men-2-1637152593.jpg"
              alt="#"
              style={{ width: "550px" }}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/BeCoolerThanWinter-WinterWear-Bewakoof-Homepage-HeroBanner-SID-1637158937.jpg"
              alt="#"
              style={{ width: "550px" }}
            />
          </div>
          <div className="grid-item">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/men-3-for-999-1634044532.png"
              alt="#"
              style={{ width: "550px" }}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Banner;
