import React from "react";
import "./Facts.css";

function Facts() {
  return (
    <div className="facts">
      <div className="factsContainer">
        <div className="headingOne">
          <div className="heading">
            <h2 className="factsContainerHeadingLight">SOME INTERESTING</h2>
            <h2 className="factsContainerHeadingDark">FACTS</h2>
          </div>
          <div>
            <p className="factsText">
              Our team takes over everything, from an idea and concept
              development to realization. We believe in traditions and
              incorporate them within our innovations. All our projects
              incorporate a unique artistic image and functional solutions.
              Client is the soul of the project. Our main goal is to illustrate
              his/hers values and individuality through design.
            </p>
          </div>
        </div>
        <div className="factsFigureContainer">
          <div className="factData">
            <h1>30+</h1>
            <p>Finished projects</p>
          </div>
          <div className="factData">
            <h1>50+</h1>
            <p>Served Companies</p>
          </div>
          <div className="factData">
            <h1>16+</h1>
            <p>Working Experience</p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Facts;
