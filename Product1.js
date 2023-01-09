import React from "react";
import "./Product1.css";

function Product1() {
  return (
    <div className="product1">
      <img
        src="http://mokshaarchitects.com/images/folio/thumbs/haldi30.jpg"
        alt=""
      />
      <div className="product1Text">
        <h4>
          HALDI GOLF{" "}
          <span>
            <strong>400 EAST & 400 WEST FACED VILLAS</strong>
          </span>
        </h4>
        <button className="btn btn-dark">View Project</button>
      </div>
    </div>
  );
}

export default Product1;
