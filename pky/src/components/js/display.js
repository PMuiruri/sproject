import React , {Component} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Image from "./image.js";
import Header from './header.js';
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
			this.setState({searchIndex: this.state.searchIndex+20})
			this.renderData();
		}
	}
	prevResults(){
		this.setState({searchIndex: this.state.searchIndex-20});
		if(this.state.searchIndex < 0){
			return console.log("no more items");
		} else{
			this.renderData();
		}
	}
	moreDetails(){
		
	}
	renderData(){
		console.log("old: "+this.state.searchIndex);
		let data = this.state.data.data.slice(this.state.searchIndex, this.state.searchIndex+20);
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
						return <div key={index}	className="container">
						<div className="media_image">
						{event.description.images.length >0 ?
							(<li className="image"><Image imageURL={event.description.images[0].url} /></li>)
							: null}
							</div>
							<div className="media_summary">
							<li></li>
							<li className="name">Name: {event.name.fi} </li>
							<li className="description">Description: {event.description.intro}</li>
							<li className="location">Location: {event.location.address.locality}</li>
							<li>Start Date:{(event.event_dates.starting_day).split("T")[0]}</li>
							{event.event_dates.ending_day != null?
								<li>End Date:{(event.event_dates.ending_day).split("T")[0]}</li>:  null}
								<button onClick={()=>this.moreDetails}>more details</button>
								</div>
								</div>
							});
						}
						return (
							<div className="body">
							<Header />
							<Input id="event" placeholder="please type texts" type="text"/>
							<Search label="Search" handleClick={()=>this.nextResults()}/>
							<ul className="flex-container"> {events} </ul>

							<Search label="Next" handleClick={()=>this.nextResults()}/>
							<Search label="Back" handleClick={()=>this.prevResults()}/>

							</div>
						)}
					}
					export default Display;
