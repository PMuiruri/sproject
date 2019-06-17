import React, { Component } from "react";
import "../style/footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


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
                <li><a href="#home">&copy; {new Date().getFullYear()}.  Developed by the cool folks at PKYJ. All rights reserved</a></li> /
                <li><a href="/about" className="footer-link">About</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul className="footer-social pull-right">
                <li><a href="/github"><i className="fab fa-github footer-icon"></i> Github</a></li>
              </ul>
            </div>    
          </Row>
        </Container>


      </div>
    );
  }
}

export default FooterPagePro;
