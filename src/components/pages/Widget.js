import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <>
      <div className="widgets">
        <div className="inner">
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/PopCulture-Bewakoof-Homepage-ThumbnailSlider-new-1632992663.jpg"
              alt=""
            />
            <h5>Pop Culture Store</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Slider-Winter-Carnival-1636740683.png"
              alt=""
            />
            <h5>Winter Carnival</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/thumbnail-cosmos-3--1--1637134561.jpg"
              alt=""
            />
            <h5>Cosmos</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/best-of-offer-thumbnail-1631190525.jpg"
              alt=""
            />
            <h5>Offers</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-plus-size-store-thumbnail-1629382695.jpg"
              alt=""
            />
            <h5>Plus Size</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Bestsellers-1603991978.png"
              alt=""
            />
            <h5>Bestseller</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Anime-Bewakoof-Homepage-ThumbnailSlider-Revised-1635493884.jpg"
              alt=""
            />
            <h5>Anime Collectio</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Slider-Festive-Wear-1634552008.png"
              alt=""
            />
            <h5>Festive Wear</h5>
          </div>
          <div className="widget">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/Thumbnail-Slider-Athleisure-1632199077.png"
              alt=""
            />
            <h5>Athleisure</h5>
          </div>
        </div>
        <img
          src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
          alt="#"
          className="Ad-img"
        />
      </div>
    </>
  );
}

export default Widget;
