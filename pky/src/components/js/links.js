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
            <Button variant="outline-danger" value="food"onClick={this.props.handleAll}>All</Button>
            <Button variant="outline-primary" value="sports" onClick={this.props.handleClick}>Sports</Button>
            <Button variant="outline-secondary" value="festivals" onClick={this.props.handleClick}>Festivals</Button>
            <Button variant="outline-success" value="dance" onClick={this.props.handleClick}>Dance</Button>
            <Button variant="outline-warning" value="music"onClick={this.props.handleClick}>Music</Button>
            <Button variant="outline-danger" value="families"onClick={this.props.handleClick}>Families</Button>
          </ButtonToolbar>
        </div>
      </div>
    );
  }
}

export default Links;
