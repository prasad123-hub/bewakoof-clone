import React from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaPinterestP,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp0QDZOGwU62AM76000cNM8WJw027eV9fHv4ISlayahzdmgYFo4_U16QBsnTryqydypTU&usqp=CAU"
          alt="Bewkoof-logo"
        />
        <div className="footer-nav">
          <div className="services">
            <p>CUSTOMER SERVICE</p>
            <ul>
              <li>Contact Us</li>
              <li>Track Order</li>
              <li>Return Order</li>
              <li>Cancle Order</li>
            </ul>
          </div>
          <div className="services">
            <p>COMPANY</p>
            <ul>
              <li>About Us</li>
              <li>We're Hiring</li>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="services">
            <p>CONNECT WITH US</p>
            <ul>
              <li>
                <FaTwitter /> <span>Twitter</span>
              </li>
              <li>
                <FaPinterestP /> <span>Pinterest</span>
              </li>
              <li>
                <FaFacebook />
                <span>Facebook</span>
              </li>
              <li>
                <FaInstagram /> <span>Instagram</span>
              </li>
            </ul>
          </div>
          <div className="services">
            <p>KEEP UP TO DATE</p>
            <button className="footer-btn">SUBSCRIBE</button>
            <div className="download-btn">
              <img
                src="https://images.bewakoof.com/web/app_android_v1.png"
                alt="google-play-btn"
              />
              <img
                src="https://images.bewakoof.com/web/app_ios_v1.png"
                alt="apple-store-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
