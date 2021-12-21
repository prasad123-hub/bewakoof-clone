import React from "react";
import "./MensCollection.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToBasket, increasecount } from "../../slices/basketSlice";
import { useAuth0 } from "@auth0/auth0-react";

function MensCollection({ data }) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  if (data) {
    var mens = data.mensProduct.map(function (men) {
      const { id, name, url, price } = men;
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
          <img src={men.url} alt="mens-tshirt" />
          <p className="product-des">{men.name}</p>
          <p className="product-price">{men.price}</p>
          {isAuthenticated && (
            <button onClick={addItemToBasket} className="cart-btn">
              Add to Cart
            </button>
          )}
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()} className="cart-btn">
              Add to Cart
            </button>
          )}
        </div>
      );
    });
  }

  // const addItemToBasket = () => {
  //   const product = {
  //     id,
  //     name,
  //     url,
  //     price,
  //   };

  // Sending the product as an action to redux store ... the basket slice
  // dispatch(addToBasket(product));
  // };

  return (
    <>
      <div className="outer1">
        <h3 className="category">MENS COLLECTION</h3>
        <div className="inner1">
          <div className="products">{mens}</div>
        </div>
      </div>
    </>
  );
}

export default MensCollection;
