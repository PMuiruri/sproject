import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import "../style/links.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class Links extends Component {
  render() {
    return (
      <Row>
        <div className="col-md-12">
          <div className="event-tags mx-auto">
            <Button className="event-tags-tag btn-sm btn-round" value="food" onClick={this.props.handleAll}><i className="fas fa-align-left links-icon"></i> Events</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="food" onClick={this.props.handlePlaces}><i className="fas fa-align-left links-icon"></i> Places</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="sports" onClick={this.props.handleClick}> <i className="fas fa-futbol links-icon"></i> Sports</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="festivals" onClick={this.props.handleClick}><i className="fas fa-glass-cheers links-icon"></i> Festivals</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="dance" onClick={this.props.handleClick}><i className="fas fa-microphone-alt links-icon"></i> Dance</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="music" onClick={this.props.handleClick}><i className="fas fa-drum links-icon"></i> Music</Button>
            <Button className="event-tags-tag btn-sm btn-round" value="families" onClick={this.props.handleClick}><i className="fas fa-baby links-icon"></i> Families</Button>
          </div>
        </div>
      </Row>
    );
  }
}

export default Links;
