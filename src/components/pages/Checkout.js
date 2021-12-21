import React from "react";
import { useSelector } from "react-redux";

import CheckoutProduct from "../pages/CheckoutProduct";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Checkout() {
  const items = useSelector((state) => state.basket.items);
  console.log("Hey", items);

  return (
    <div>
      <Navbar />
      <img
        src="https://images.bewakoof.com/uploads/grid/app/desktop---strip-1440---x-150---tribe-1634552003.png"
        alt="#"
        className="Ad-img"
      />
      {items.map((item, i) => (
        <CheckoutProduct
          key={i}
          id={item.id}
          name={item.name}
          price={item.price}
          url={item.url}
        />
      ))}
      <Footer />
    </div>
  );
}

export default Checkout;
