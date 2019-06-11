import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import EventMap from './eventMap.js';
import moment from 'moment';


class Event extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
      <h1>{this.props.data.name.fi}</h1>
      <p>
      	<div dangerouslySetInnerHTML={{__html: this.props.data.description.body}}></div>
      </p>
      <p> <strong>Street Address : </strong>
      {this.props.data.location.address.street_address} {this.props.data.location.address.postal_code} {this.props.data.location.address.locality}
      </p>
      <p> <strong>Tags : </strong>
      {this.props.data.tags[0].name}
      </p>
      <p>  <strong>Start : </strong>{moment.utc(this.props.data.event_dates.starting_day).format("LLLL")}</p>
      {this.props.data.event_dates.ending_day != null?
        <p><strong>End : </strong>{moment.utc(this.props.data.event_dates.ending_day).format("LLLL")}</p>:  null}
      </Jumbotron>
      <div>
      <EventMap data={this.props.data.location}/>
      </div>
      </div>
    );
  }

}

export default Event;
