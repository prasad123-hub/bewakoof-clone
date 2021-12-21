import React from "react";
import "./MensCollection.css";
import { useDispatch } from "react-redux";
import { addToBasket, increasecount } from "../../slices/basketSlice";

export default function Accesories({ data }) {
  const dispatch = useDispatch();

  if (data) {
    var accs = data.accessories.map(function (acc) {
      const { id, name, url, price } = acc;
      const addItemToBasket = () => {
        const product = {
          id,
          name,
          url,
          price,
        };

        console.log("product", product);

        // Sending the product as an action to redux store ... the basket slice
        dispatch(addToBasket(product));
        dispatch(increasecount());
      };
      return (
        <div className="product">
          <img src={acc.url} alt="mens-tshirt" />
          <p className="product-des">{acc.name}</p>
          <p className="product-price">{acc.price}</p>
          <button className="cart-btn" onClick={addItemToBasket}>
            Add to Cart
          </button>
        </div>
      );
    });
  }

  return (
    <>
      <div className="outer1">
        <h3 className="category">Accesories For You</h3>
        <div className="inner1">
          <div className="products">{accs}</div>
        </div>
      </div>
      <img
        src="https://images.bewakoof.com/uploads/grid/app/Desktop-banner-Half-Refer-And-Chill-1630929040.png"
        alt=""
        style={{ width: "100%" }}
      />
    </>
  );
}
