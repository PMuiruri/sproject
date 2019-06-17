import React, { Component } from "react";

import EventMap from "./eventMap.js";
import moment from "moment";
import {Link} from 'react-router-dom';
import Row from "react-bootstrap/Row";
import Search from "./search.js";

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
    if (typeof this.props.dataSet !== "undefined" && this.props.dataSet.length > 0) {
       event = this.props.dataSet[this.state.eventIndex];
     }
    return (
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1>{event.name.fi}</h1>
            <div dangerouslySetInnerHTML={{__html: event.description.body}}></div>
          <p> <strong>Street Address : </strong>
          {event.location.address.street_address} {event.location.address.postal_code} {event.location.address.locality}
          </p>
          <p> <strong>Tags : </strong>
          {event.tags[0].name}
          </p>
          <p>  <strong>Start : </strong>{moment.utc(event.event_dates.starting_day).format("LLLL")}</p>
          {event.event_dates.ending_day != null?
            <p><strong>End : </strong>{moment.utc(event.event_dates.ending_day).format("LLLL")}</p>:  null}
        </div>
        <div className="col-md-6 mt-5">
        <EventMap data={event.location}/>
        </div>
        <div>
        <Row className="justify-content-center">
        <Search className="bbtn"label="Back" handleClick={()=>this.prevEvent()}  handleChange={this.state.isprevdisabled}/>
        <Search label="Next" className="bbtn" handleClick={()=>this.nextEvent()} handleChange={this.state.isnextdisabled}/>
        <Link to="/display">Home</Link>
        </Row>
      </div>
      </div>
    );
  }
}

export default Event;
