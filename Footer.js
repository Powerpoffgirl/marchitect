import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerLeft">
        <img src="http://mokshaarchitects.com/images/logo-ft.png" alt="" />
        <p>
          Our team takes over everything, from an idea and concept development
          to realization. We believe in traditions and incorporate them within
          our innovations.
        </p>
      </div>
      <div className="footerRight">
        <div className="footerRightTop">
          <div className="contact">
            <h6>CALL US</h6>
            <p>+91 9849627328</p>
          </div>
          <div className="contact">
            <h6>MAIL US</h6>
            <p>ganesh@mokshaarchitects.com</p>
          </div>
          <div className="contact">
            <h6>VISIT US</h6>
            <p>
              PLOT NO: 67, SRINIVASA SQUARE 1ST FLOOR, GAFFOOR NAGAR, MADHAPUR,
              HYDERABAD, TELANGANA 500081.VIEW ON MAP
            </p>
          </div>
        </div>

        <div className="footerRightBottom">
          <p>© MOKSHA ARCHITECT 2022. ALL RIGHTS RESERVED.</p>
          <p>TO TOP</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
