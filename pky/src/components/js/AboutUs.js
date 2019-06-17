import React, { Component } from "react";
import Header from "./header.js";
import FooterPagePro from "./Footer.js";
import { Media } from "react-bootstrap";
import "../style/AboutUs.css";

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="about-container">
          <Media>
            <img
              width={201}
              height={200}
              className="pic_HBC"
              src="images/businessCollege.jpeg"
              alt="Generic placeholder"
            />
            <Media.Body className="media_body">
              <h1>About us</h1>
              <p>
                We are students who are enthusiastic to learn full stack
                development. This application is our summer project 2019 by
                using MyHesinkiAPI to introduce events in Helsinki.
              </p>
            </Media.Body>
          </Media>
        </div>
        <FooterPagePro />
      </div>
    );
  }
}
export default AboutUs;
