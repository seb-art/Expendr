import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            The future belongs to those who spend money wisely
          </h1>
          <p className="primary-text">
            Do you find yourself not accounting for money spent. Well, if this
            sound like you worry no more. Sign Up with us now
          </p>
          <button className="secondary-button">
            Sign Up now
            <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
