import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="welcomeContainer">
        <div
          id="carouselExampleIndicators"
          class="col-md-3 carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="http://mokshaarchitects.com/images/folio/slider/4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="http://mokshaarchitects.com/images/folio/slider/4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="http://mokshaarchitects.com/images/folio/slider/4.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        {/* Welcome text */}
        <div className="welcomeText">
          <h4>
            WELCOME WE ARE <span>MOKSHA ARCHITECT</span>
          </h4>
          <p>
            Moksha Architects is a Hyderabad based establishment with more than
            16 years of experience in providing the best and reliable services
            in the city. We provide custom and personalised services that fulfil
            your needs. Experience sustainable modern spaces that include but
            are not restricted to houses, offices, studios, education and
            healthcare. We are a team trusted by various members of the society
            in creating and recreating your personal and commercial environments
            without spending your own time and effort.
          </p>
          <p className="dots">.............</p>
          <h5>Our Process</h5>
          <p className="processText">
            ------ <span>IDEA & START </span>------<span> DESIGN & CRATE </span>
            ------ <span>BUILD & FINISH</span>{" "}
          </p>
          <button className="btn btn-dark">View Our portfolio</button>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
