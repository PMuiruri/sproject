import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';


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
      <p>
      <Button variant="primary" onClick={this.props.data.info_url}>more</Button>
      </p>
      </Jumbotron>
      </div>
    );
  }

}

export default Event;
