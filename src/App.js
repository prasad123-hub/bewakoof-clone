import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/pages/Navbar";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./components/pages/Banner";
import Widget from "./components/pages/Widget";
import MensCollection from "./components/pages/MensCollection";
import WomensCollection from "./components/pages/WomensCollection";
import Advertise from "./components/pages/Advertise";
import Accesories from "./components/pages/Accesories";
import AdvertiseTwo from "./components/pages/AdvertiseTwo";
import Footer from "./components/pages/Footer";
import Checkout from "./components/pages/Checkout";

function App() {
  const [productData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
        // console.log(data);
      });
  }, []);

  let fetchDetails = () => {
    fetch("/productData.json")
      .then((res) => res.json())
      .then((data) => console.log("For Mahesh", data.main.mensProduct[0].name));
  };

  fetchDetails();

  return (
    <>
      <Navbar />
      <Banner />
      <Widget />
      <MensCollection data={productData.main} />
      <WomensCollection data={productData.main} />
      <Advertise />
      <Accesories data={productData.main} />
      <AdvertiseTwo />
      <Footer />
    </>
  );
}

export default App;
