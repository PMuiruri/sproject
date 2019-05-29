import React , {Component} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Image from "./image.js";


class Display extends Component{
	constructor(props) {
		super(props);

		this.state = {
			data:{},
		};
	};

	fetchData() {
		fetch("http://localhost:3030/")
		.then(response => response.json())
		.then(data => this.setState((prevState) =>({
			...prevState.data,
			data

		})))
		.catch(error=> console.log(error));

	}
	render(){
		var events= [];
		if (typeof this.state.data.data !== 'undefined' && this.state.data.data.length > 0 ){
			events = this.state.data.data.map( (event, index) =>{
				console.log(event);
				return <div key={index} >
				<li >Name: {event.name.fi}</li>
				<li >Description: {event.description.intro}</li>
				<li>Location: {event.location.address.locality}</li>
				<li>Start Date:{event.event_dates.starting_day}</li>
				<li>End Date:{event.event_dates.ending_day}</li>

				{console.log(event.event_dates.starting_day)}
				{event.description.images.length >0 ?
					(<li><Image imageURL={event.description.images[0].url} /></li>)
					: null}
				</div>
			});

		}
		return (

			<div className="body">
			<Input />
			<Search handleClick={()=>this.fetchData()}/>

			<ul className="eventbody"> {events} </ul>
			</div>

		)}
	}
	export default Display;
