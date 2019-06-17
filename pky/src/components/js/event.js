import React, { Component } from 'react';
import EventMap from './eventMap.js';
import moment from 'moment';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';

class Event extends Component {

  render() {
    return (

      <div className="container-fluid">  
        <Row className="justify-content-between align-items-center">
          <Col md={4}>
            <Card className="card-map card-raised">
              <Card.Header className="card-rose">
                <i className="fas fa-map-pin map-icon"></i> {this.props.data.location.address.street_address} {this.props.data.location.address.postal_code} {this.props.data.location.address.locality}<br />
                <i className="fas fa-business-time map-icon"></i>{moment.utc(this.props.data.event_dates.starting_day).format("lll")} - &nbsp;
                <i className="fas fa-history map-icon"></i>{moment.utc(this.props.data.event_dates.ending_day).format("lll")}
              </Card.Header>
              <Card.Body>
                <h2>{this.props.data.name.fi}</h2>
                <div dangerouslySetInnerHTML={{__html:this.props.data.description.body}}></div>
              </Card.Body>
              <Card.Footer>
                <h6>{this.props.data.tags[0].name}</h6>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={7}>
            <EventMap className="map-leaflet" data={this.props.data.location}/>
          </Col>
        </Row>
      </div>
    );
  }

}

export default Event;
