import React, { Component } from 'react';
import {Jumbotron} from 'react-bootstrap';
import EventMap from './eventMap.js';


class Event extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
      <h1>{this.props.data.name.fi}</h1>
      <p>
      	<div dangerouslySetInnerHTML={{__html: this.props.data.description.body}}></div>
      </p>
      <p>
      {this.props.data.location.address.street_address}
      </p>
      <p>
      {this.props.data.tags[0].name}
      </p>

      </Jumbotron>
      <EventMap data={this.props.data.location}/>
      </div>
    );
  }

}

export default Event;
