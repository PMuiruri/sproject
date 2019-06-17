import React, { Component } from 'react';
import EventMap from './eventMap.js';
import moment from 'moment';
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from 'react-bootstrap/Col';
import Search from './search.js'

var eventS;
class Event extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.nextEvent.bind(this);
    this.handleClick = this.prevEvent.bind(this);

    this.state={
      isprevdisabled:false,
      isnextdisabled:false,
      eventIndex: 0
    }
  }
  //function to navigate to next single event
    nextEvent () {
      if(this.state.eventIndex < this.props.dataSet.length){
        this.setState({eventIndex: this.state.eventIndex+1})
      }
    }
    //function to navigate to previous single event
    prevEvent () {
      if(this.state.eventIndex > 0){
        this.setState({eventIndex: this.state.eventIndex-1})
      }
    }

  renderData () {
    if (typeof this.props.dataSet !== "undefined" && this.props.dataSet.length > 0) {
       eventS = this.props.dataSet.findIndex(obj => {
           return obj.id === this.props.id;
      })
      this.setState({eventIndex:eventS});
  }
}
  componentDidUpdate(){
    console.log("index: "+this.state.eventIndex);
  }
  render() {
    var event={};
    console.log(this.props.id);
    console.log(this.props.dataSet);
    if (typeof this.props.dataSet !== "undefined" && this.props.dataSet.length > 0) {
       event = this.props.dataSet[this.state.eventIndex];
       console.log(event);
     }
    return (
      <div className="container-fluid">
        <Row className="justify-content-between align-items-center">
          <Col md={4}>
            <Card className="card-map card-raised">
              <Card.Header className="card-rose">
                <i className="fas fa-map-pin map-icon"></i> {event.location.address.street_address} {event.location.address.postal_code} {event.location.address.locality}<br />
                <i className="fas fa-business-time map-icon"></i>{moment.utc(event.event_dates.starting_day).format("lll")} - &nbsp;
                <i className="fas fa-history map-icon"></i>{moment.utc(event.event_dates.ending_day).format("lll")}
              </Card.Header>
              <Card.Body>
                <h2>{event.name.fi}</h2>
                <div dangerouslySetInnerHTML={{__html:event.description.body}}></div>
              </Card.Body>
              <Card.Footer>
                <h6>{event.tags[0].name}</h6>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={7}>
            <EventMap className="map-leaflet" data={event.location}/>
          </Col>
        </Row>
        <div>
        <Row className="justify-content-center">
        <Search className="bbtn"label="Back" handleClick={()=>this.prevEvent()}  handleChange={this.state.isprevdisabled}/>
        <Search label="Next" className="bbtn" handleClick={()=>this.nextEvent()} handleChange={this.state.isnextdisabled}/>
        </Row>
      </div>
      </div>
    );
  }
}

export default Event;
