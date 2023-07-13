import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="image-container">
          <img
          src="https://img.freepik.com/free-vector/happy-people-shopping-online_74855-5865.jpg?w=2000"
            alt="About Us"
          />
        </div>
        <div className="content-container">
          <h2>WHY CHOOSE US?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, velit ut semper tincidunt, mi nisl eleifend mauris.
          </p>
          <Link to="/products" className="contact-button">
           Our Shop
          </Link>
        </div>
      </div>

      <div className="about-container">
      
        <div className="content-container1">
          <h2>WHAT WE PROVIDE?</h2>
          <p className="p1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            aliquet, velit ut semper tincidunt, mi nisl eleifend mauris.
      
          </p>
          <Link to="/contact" className="contact-button">
           Message Us
          </Link>
        </div>
        <div className="image-container">
          <img
                    src="https://img.freepik.com/premium-vector/e-commerce-online-shopping-flat-illustration-suitable-web-banners_210682-45.jpg?w=2000"
            alt="Additional Content"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
