import React from "react";
import "./CheckOutProduct.css";

function CheckoutProduct({ id, name, url, price }) {
  return (
    <div className="check-outer">
      <div className="check-inner">
        <img src={url} alt={name} className="check-img" />
        <div className="check-details">
          <p className="check-name">{name} </p>
          <p className="check-price">{price}</p>
          <button className="check-btn1">Place Order</button>
          <button className="check-btn2">Remove Item</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
