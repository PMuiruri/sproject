import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

class FooterPagePro extends Component {
  render() {
    return (
      <div>
        <MDBFooter color="indigo" className="font-small pt-0">
          <MDBContainer>
            <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
              <MDBCol md="2" className="b-3">
                <h6 className="title font-weight-bold">
                  <Link to="/AboutUs">About us</Link>
                </h6>
              </MDBCol>
              <MDBCol md="2" className="b-3">
                <h6 className="title font-weight-bold">
                  <Link to="/ContactUs">Contact us</Link>
                </h6>
              </MDBCol>
            </MDBRow>
            <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
            <MDBRow className="d-flex text-center justify-content-center mb-md-0 mb-4">
              <MDBCol md="8" sm="12" className="mt-5">
                <p style={{ lineHeight: "1.7rem" }}>
                  This is a summer project of pyk team at Business College
                  Helsinki.
                </p>
              </MDBCol>
            </MDBRow>
            <hr
              className="clearfix d-md-none rgba-white-light"
              style={{ margin: "10% 15% 5%" }}
            />
            <MDBRow className="pb-3">
              <MDBCol md="12">
                <div className="mb-5 flex-center">
                  <a
                    className="fb-ic"
                    href="https://www.facebook.com/myhelsinki"
                  >
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-4" />
                  </a>
                  <a className="tw-ic" href="https://twitter.com/myhelsinki">
                    <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
                  </a>
                  <a
                    className="ins-ic"
                    href="https://www.instagram.com/myhelsinki/"
                  >
                    <i className="fab fa-instagram fa-lg white-text mr-md-4" />
                  </a>
                  <a
                    className="you-ic"
                    href="https://www.youtube.com/user/Visithelsinki"
                  >
                    <i className="fab fa-youtube fa-lg white-text mr-md-4"> </i>
                  </a>
                  <a
                    className="git-ic"
                    href="https://github.com/PMuiruri/sproject"
                  >
                    <i className="fab fa-github fa-lg white-text mr-md-4"> </i>
                  </a>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:
              <a href="https://www.MDBootstrap.com"> pky summer project </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}

export default FooterPagePro;
