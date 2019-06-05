import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "../style/links.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Links extends Component {
  render() {
    return (
      <div>
        <div className="link-container">
          <ButtonToolbar className="body-links">
            <Button variant="outline-primary">Sports</Button>
            <Button variant="outline-secondary">Festivals</Button>
            <Button variant="outline-success">Dance</Button>
            <Button variant="outline-warning">Music</Button>
            <Button variant="outline-danger">Food</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Links;
