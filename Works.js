import React from "react";
import AllProducts from "./AllProducts";
import Product1 from "./Product1";
import Product2 from "./Product2";
import "./Works.css";

function Works() {
  return (
    <div className="works">
      {/* WorksHeading */}
      <h4>OUR FEATURED WORKS</h4>
      <Product1 />
      <Product2 />
      <Product1 />
      <Product2 />
      <Product1 />
      <Product2 />
      <AllProducts />
    </div>
  );
}

export default Works;
