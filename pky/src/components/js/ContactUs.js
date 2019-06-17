import React, { Component } from "react";
import Header from "./header.js";
import FooterPagePro from "./Footer.js";
import { Media } from "react-bootstrap";
import "../style/ContactUs.css";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="contact-container">
          <Media>
            <img
              width={201}
              height={200}
              className="pic_HBC"
              src="images/businessCollege.jpeg"
              alt="Generic placeholder"
            />
            <Media.Body className="media_body">
              <h1>Contact information</h1>
              <li>Business College Helsinki</li>
              <li>pky@student.businesscollege.fi</li>
              <li>04521453654</li>
            </Media.Body>
          </Media>
        </div>
        <FooterPagePro />
      </div>
    );
  }
}

export default ContactUs;
