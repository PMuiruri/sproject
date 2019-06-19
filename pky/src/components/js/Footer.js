import React, { Component } from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

class FooterPagePro extends Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <div className="col-md-3">
              <span className="footer-brand">EVENTSin.</span>
            </div>
            <div className="col-md-6">
              <ul className="footer-links pull-center">
                <li>
                  <a href="#home">
                    &copy; {new Date().getFullYear()}. Developed by the cool
                    folks at PKYJ. All rights reserved
                  </a>
                </li>{" "}
                /
                <li>
                  <Link to="/AboutUs">About</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="footer-social pull-right">
                <li>
                  <a href="https://github.com/PMuiruri/sproject">
                    <i className="fab fa-github footer-icon" /> Github
                  </a>
                </li>
              </ul>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default FooterPagePro;
