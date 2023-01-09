import React from "react";
import "./Product2.css";

function Product2() {
  return (
    <div className="product2">
      <div className="product2Text">
        <h4>
          HAPPINESS HUB{" "}
          <span>
            <strong>(RESIDENTIAL APARTMENTS)</strong>
          </span>
        </h4>
        <button className="btn btn-dark">View Project</button>
      </div>
      <img
        className="product2Img"
        src="http://mokshaarchitects.com/images/folio/thumbs/happy31.jpg"
        alt=""
      />
    </div>
  );
}

export default Product2;
