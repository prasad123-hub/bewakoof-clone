import React from "react";
import "./MensCollection.css";
import { useDispatch } from "react-redux";
import { addToBasket, increasecount } from "../../slices/basketSlice";

function WomensCollection({ data }) {
  const dispatch = useDispatch();
  if (data) {
    var womens = data.womenProduct.map(function (women) {
      const { id, name, url, price } = women;
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
          <img src={women.url} alt="mens-tshirt" />
          <p className="product-des">{women.name}</p>
          <p className="product-price">{women.price}</p>
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
        <h3 className="category">WOMENS COLLECTION</h3>
        <div className="inner1">
          <div className="products">{womens}</div>
        </div>
      </div>
    </>
  );
}

export default WomensCollection;
