import React, {Component} from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Search from "./search.js";
import Image from "./image.js";
class Cards extends Component{

  render(){
return (
<div>
  <Card style={{ width: '18rem' }}>
{this.props.event.description.images.length >0 ?
    (<Card.Img variant="top" src={this.props.event.description.images[0].url}  />)
    : <Card.Img variant="top" src="images/altImage.png" style={{width:'266px', height:'159px'}}/>}
    <Card.Body>
      <Card.Title>{this.props.event.name.fi}</Card.Title>
      <Card.Text>{this.props.event.description.intro}</Card.Text>
      <Card.Text>{this.props.event.location.address.locality}</Card.Text>
      <Card.Text>Start Date:{(this.props.event.event_dates.starting_day).split("T")[0]}</Card.Text>
      {this.props.event.event_dates.ending_day != null?
        <Card.Text>End Date:{(this.props.event.event_dates.ending_day).split("T")[0]}</Card.Text>:  null}
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
</div>
);

  }
}
export default Cards
