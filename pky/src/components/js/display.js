import React , {Component} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Header from './header.js';
import Cards from './cards.js';
import Button from "react-bootstrap/Button";

import "../style/display.css";


class Display extends Component{
	constructor(props) {
		super(props);

		this.state = {
			data:{},
			searchIndex: 0,
			eventList:[],
			isloaded:false
		};
	};
	nextResults(){
		if(this.state.searchIndex >80){
			return console.log("no more items");
		} else{
			this.setState({searchIndex: this.state.searchIndex+9,
			isloaded:true})
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
	moreDetails(){

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
				data: data
			})

			})
				.catch(error=> console.log(error));
			}
componentDidMount(){
	this.fetchData();
}
			render(){
				var events= [];
					console.log(this.state.eventList);

				if (typeof this.state.eventList !== 'undefined' && this.state.eventList.length > 0 ){
					events = this.state.eventList.map( (event, index) =>{
						return <div><Cards key={index} event={event}/>
						</div>
							});
						}
						return (
							<div className="body">
							<Header />
							<Input id="event" placeholder="please type texts" type="text"/>
							<Search label="Search" handleClick={()=>this.nextResults()}/>
							<div>
							<div className="flex-container"> {events}</div>
							{this.state.isloaded?(
								<div>
								<Search label="Back" className="bbtn" handleClick={()=>this.prevResults()}/>
								<Search label="Next" className= "bbtn" handleClick={()=>this.nextResults()}/>
								</div>)
								:null}
							</div>
							</div>
						)}
					}
					export default Display;
