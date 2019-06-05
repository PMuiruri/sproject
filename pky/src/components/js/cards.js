import React, {Component} from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../style/cards.css"
import moment from 'moment';
class Cards extends Component{

handleClick=()=> {
	let id= this.props.event.id;
	this.props.moreDetails(id);
}
  render(){
return (
<div>
  <Card className="card" style={{ width: '24rem' }}>
{this.props.event.description.images.length >0 ?
    (<Card.Img variant="top" src={this.props.event.description.images[0].url}  />)
    : <Card.Img variant="top" src="images/altImage.png" style={{width:'266px', height:'226px'}}/>}
    <Card.Body>
      <Card.Title>{this.props.event.name.fi}</Card.Title>
      <Card.Text>{this.props.event.description.intro}</Card.Text>
      <Card.Text>{this.props.event.location.address.locality}</Card.Text>
      <Card.Text> <strong>Start : </strong>{moment.utc(this.props.event.event_dates.starting_day).format("LLLL")}</Card.Text>
      {this.props.event.event_dates.ending_day != null?
        <Card.Text><strong>End : </strong>{moment.utc(this.props.event.event_dates.ending_day).format("LLLL")}</Card.Text>:  null}
      <Button variant="primary" onClick={this.handleClick}>More Details</Button>
    </Card.Body>
  </Card>
</div>
);

  }
}
export default Cards
