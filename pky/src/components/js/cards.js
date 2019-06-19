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
  <Card className="card-event" style={{ width: '18rem' }}>
    {this.props.event.description.images.length >0 ?
    (<Card.Img className="card-header card-header-image img-shadow" variant="top" src={this.props.event.description.images[0].url}  />)
    : <Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{width:'266px', height:'226px'}}/>}
    <Card.Body>
      <Card.Title className="event-title">{this.props.event.name.fi}</Card.Title>
      <Card.Text className="event-venue"><i className="fas fa-map-pin event-icon"></i>{this.props.event.location.address.locality}</Card.Text>
      <Card.Text className = "event-venue mbtm-1">
        <i className="fas fa-business-time event-icon"></i>{moment.utc(this.props.event.event_dates.starting_day).format("lll")}
      </Card.Text>
      {this.props.event.event_dates.ending_day != null?
        <Card.Text><i className="fas fa-history event-icon"></i>{moment.utc(this.props.event.event_dates.ending_day).format("ll")}</Card.Text>:  null}

      <Card.Text className="truncate">{this.props.event.description.intro}</Card.Text>
      <Button variant="primary" className="btn-rose btn btn-round" onClick={this.handleClick}>More Details</Button>
    </Card.Body>
  </Card>
</div>
);

  }
}
export default Cards
