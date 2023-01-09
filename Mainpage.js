import React from "react";
import AboutUs from "./AboutUs";
import Facts from "./Facts";
import Footer from "./Footer";
import "./Mainpage.css";
import Works from "./Works";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Mainpage() {
  return (
    <div className="mainpage">
      <FontAwesomeIcon icon="fa-solid fa-check-square" />

      <header>
        <img src="http://mokshaarchitects.com/images/logo.png" alt="" />
      </header>
      <video
        src="http://mokshaarchitects.com/images/video/Mokshaedit01.mp4"
        autoPlay="true"
      />

      <AboutUs />
      <Facts />
      <Works />
      <Footer />
      <div></div>
    </div>
  );
}

export default Mainpage;
