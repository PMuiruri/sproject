import React, {Component} from "react";
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../style/cards.css"
import moment from 'moment';

function renderEvents({ event }) {
	return (
		<div>
		<Card className="card-event" style={{ width: '18rem' }}>
		{this.props.event.description.images.length >0 ?
			(<Card.Img className="card-header card-header-image img-shadow" variant="top" src={this.props.event.description.images[0].url}  />)
			: <Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{width:'266px', height:'226px'}}/>}
			<Card.Body>
			<Card.Title className="event-title">{this.props.event.name.fi}</Card.Title>
			<Card.Text className="event-venue"><i className="fas fa-map-pin event-icon"></i>{this.props.event.location.address.locality}</Card.Text>
			<Card.Text className = "event-venue">
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

		class Cards extends Component{

			handleClick=()=> {
				let id= this.props.event.id;
				this.props.moreDetails(id);
			}
			render(){
				let event = this.props.event;
				return (
					<div>
					{ this.props.type === "event"
						? (
							<Card className="card-event" style={{ width: '18rem' }}>
							{this.props.event.description.images.length >0 ?
								(<Card.Img className="card-header card-header-image img-shadow" variant="top" src={this.props.event.description.images[0].url}  />)
								: <Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{width:'266px', height:'226px'}}/>}
								<Card.Body>
								<Card.Title className="event-title">{this.props.event.name.fi}</Card.Title>
								<Card.Text className="event-venue"><i className="fas fa-map-pin event-icon"></i>{this.props.event.location.address.locality}</Card.Text>
								<Card.Text className = "event-venue">
								<i className="fas fa-business-time event-icon"></i>{moment.utc(this.props.event.event_dates.starting_day).format("lll")}
								</Card.Text>
								{this.props.event.event_dates.ending_day != null?
									<Card.Text><i className="fas fa-history event-icon"></i>{moment.utc(this.props.event.event_dates.ending_day).format("ll")}</Card.Text>:  null}
									<Card.Text className="truncate">{this.props.event.description.intro}</Card.Text>
									<Button variant="primary" className="btn-rose btn btn-round" onClick={this.handleClick}>More Details</Button>
									</Card.Body>
									</Card>
						)
						: ( this.props.type === "places"
						? (
							<Card className="card-event" style={{ width: '18rem' }}>
							{typeof this.props.event.description.images == 'undefined' || this.props.event.description.images == null
				        ? (<Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{ width:'auto', height:'156px'}}/>)
				        : ( this.props.event.description.images.length > 0
				          ? 	(<Card.Img className="card-header card-header-image img-shadow" variant="top" src={this.props.event.description.images[0].url}  />)
				          : <Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{ width:'auto', height:'156px'}}/>
				        )
				      }
								<Card.Body>
								<Card.Title className="event-title">{event.name.fi}</Card.Title>
								<Card.Text className="event-venue"><i className="fas fa-map-pin event-icon"></i>{this.props.event.location.address.locality}</Card.Text>
								<Card.Text className="truncate">{this.props.event.description.intro}</Card.Text>
								<Button variant="primary" className="btn-rose btn btn-round" onClick={this.handleClick}>More Details</Button>
								</Card.Body>
								</Card>

						)
						:(
							<Card className="card-event" style={{ width: '18rem' }}>
							{event.description.images.length > 0 ?
								(<Card.Img className="card-header card-header-image img-shadow" variant="top" src={event.description.images[0].url}  />)
								: <Card.Img className="card-header card-header-image img-shadow" variant="top" src="images/altImage.png" style={{width:'266px', height:'226px'}}/>}
								<Card.Body>
								<Card.Title className="event-title">{event.name.fi}</Card.Title>
								<Card.Text className="event-venue"><i className="fas fa-map-pin event-icon"></i>{this.props.event.location.address.locality}</Card.Text>
								<Card.Text className="truncate">{this.props.event.description.intro}</Card.Text>
								<Card.Text className = "event-venue">
								<i className="fas fa-business-time event-icon"></i>{this.props.event.where_when_duration.where_and_when}
								</Card.Text>
								<Button variant="primary" className="btn-rose btn btn-round" onClick={this.handleClick}>More Details</Button>
								</Card.Body>
								</Card>
						)
					)
				}


						</div>
					);

				}
			}
			export default Cards
