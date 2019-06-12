import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import EventMap from "./eventMap.js";
import moment from "moment";
import Row from "react-bootstrap/Row";
import Search from "./search.js";

var eventS;
class Event extends Component {
  constructor(props) {
    super(props);
    this.state={
      isprevdisabled:false,
      isnextdisabled:false,
      eventIndex: 0
    }
  }
  renderData(){
    if (typeof this.props.dataSet !== "undefined" && this.props.dataSet.length > 0) {
       eventS = this.props.dataSet.findIndex(obj => {
           return obj.id === this.props.id;
      })
      this.setState({eventIndex:eventS});
  }
}
  componentDidUpdate(){
    console.log(this.state.eventIndex);
  }
  render() {
    var event={};
    console.log(this.props.id);
    if (typeof this.props.dataSet !== "undefined" && this.props.dataSet.length > 0) {
       event = this.props.dataSet[this.state.eventIndex];
     }
    return (
      <div>
        <Jumbotron>
          <h1>{event.name.fi}</h1>
          <p dangerouslySetInnerHTML={{__html: event.description.body}}/>
          <p><strong>Street Address : </strong>
            {event.location.address.street_address}{" "}
            {event.location.address.postal_code}{" "}
            {event.location.address.locality}
          </p>
          <p><strong>Tags : </strong>
            {event.tags[0].name}
          </p>
          <p><strong>Start : </strong>
            {moment.utc(event.event_dates.starting_day).format("LLLL")}
          </p>
          {event.event_dates.ending_day != null ? (
            <p><strong>End : </strong>
              {moment.utc(event.event_dates.ending_day).format("LLLL")}
            </p>
          ) : null}
        </Jumbotron>
        <div>
          <EventMap data={event.location} />
          <Row className="justify-content-center">
          </Row>
        </div>
        <Row className="justify-content-center">
        <Search className="bbtn"label="Back" handleClick={() => this.prevResults()}  handleChange={this.state.isprevdisabled}/>
        <Search label="Next" className="bbtn" handleClick={() => this.nextResults()} handleChange={this.state.isnextdisabled}/>
        </Row>
      </div>
    );
  }
}

export default Event;
