import React , {Component} from "react";
import Search from "./search.js";

import Image from "./image.js";
import Header from './header.js';
import {Card} from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "../style/display.css";


class Display extends Component{
	constructor(props) {
		super(props);

		this.state = {
			data:{},
			searchIndex: 0,
			eventList:[]
		};
	};
	nextResults(){
		if(this.state.searchIndex >80){
			return console.log("no more items");
		} else{
			this.setState({searchIndex: this.state.searchIndex+9})
			this.renderData();
		}
	}
	prevResults(){
		this.setState({searchIndex: this.state.searchIndex-9});
		if(this.state.searchIndex < 0){
			return console.log("no more items");
		} else{
			this.renderData();
		}
	}
	renderData(){
		console.log("old: "+this.state.searchIndex);
		let data = this.state.data.data.slice(this.state.searchIndex, this.state.searchIndex+9);
		this.setState({eventList: data});
	}
	componentDidUpdate(){
		console.log("new: "+this.state.searchIndex);
		window.scrollTo(0,0);
	}
	fetchData =()=> {
		fetch("http://localhost:3030/")
		.then(response => response.json())
		.then( data => {
			console.log(data);
			this.setState({
				data: data})})
				.catch(error=> console.log(error));

			}
componentDidMount(){
	this.fetchData();
}
			render(){
				var events= [];
				if (typeof this.state.eventList !== 'undefined' && this.state.eventList.length > 0 ){
					events = this.state.eventList.map( (event, index) =>{
						return <Card key={index} style={{ width: '18rem' }}>
						{event.description.images.length >0 ?
							(<Card.Img variant="top" src={event.description.images[0].url}  />)
							: null}
					    <Card.Body>
					      <Card.Title>{event.name.fi}</Card.Title>
					      <Card.Text>{event.description.intro}</Card.Text>
								<Card.Text>{event.location.address.locality}</Card.Text>
								<Card.Text>Start Date:{(event.event_dates.starting_day).split("T")[0]}</Card.Text>
								{event.event_dates.ending_day != null?
									<Card.Text>End Date:{(event.event_dates.ending_day).split("T")[0]}</Card.Text>:  null}
					      <Button variant="primary">Go somewhere</Button>
					    </Card.Body>
					  </Card>
							});
						}
						return (
							<div className="body">
							<Header />
							<ul className="flex-container"> {events}


							<Search label="Back" className="bbtn" handleClick={()=>this.nextResults()}/>
							<Search label="Next" className= "bbtn" handleClick={()=>this.prevResults()}/>
</ul>
							</div>
						)}
					}
					export default Display;
