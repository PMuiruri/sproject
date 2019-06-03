import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';


class Event extends Component {

  render() {
    return (
      <div>
      <Jumbotron>
      <h1>{this.props.data.Title}</h1>
      <p>
      {this.props.data.description}
      </p>
      <p>
      {this.props.data.street_address}
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
