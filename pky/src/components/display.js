import React , {Component} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Image from "./image.js";
import "./display.css";


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

				return <div key={index} className="index">
				<li className="name">Name: {event.name.fi}</li>
				<li className="description">Description: {event.description.intro}</li>
				<li className="location">Location: {event.location.address.locality}</li>
				{console.log(event.description.images[0])}
				{event.description.images.length >0 ?
					(<li className="image"><Image imageURL={event.description.images[0].url} /></li>)
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
