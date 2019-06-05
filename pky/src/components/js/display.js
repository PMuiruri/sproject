import React, {
  Component
} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Header from './header.js';
import Cards from './cards.js';
import ControlledCarousel from "./carousel.js";
import Row from "react-bootstrap/Row"
import Event from "./event.js"
import "../style/search.css"
import "../style/display.css";
import "../style/carousel.css";



class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      searchIndex: 0,
      eventList: [],
      isloaded: false,
      singleEvent: false,
      eventId: 0
    };
  };
  nextResults() {
    if (this.state.searchIndex > 80) {
      return console.log("no more items");
    } else {
      this.setState({
        searchIndex: this.state.searchIndex + 9,
        isloaded: true
      })
      this.renderData();
    }
  }
  prevResults() {
    this.setState({
      searchIndex: this.state.searchIndex - 9
    });
    if (this.state.searchIndex < 0) {
      return console.log("no more items");
    } else {
      this.renderData();
    }
  }
  moreDetails = (id) => {
    this.setState({
      singleEvent: true,
      eventId: id
    });
  }
  renderData() {
    console.log("old: " + this.state.searchIndex);
    let data = this.state.data.data.slice(this.state.searchIndex, this.state.searchIndex + 9);
    this.setState({
      eventList: data
    });
  }
  componentDidUpdate() {
    console.log("new: " + this.state.searchIndex);
    window.scrollTo(0, 0);
  }
  fetchData = () => {
    fetch("http://localhost:3030/")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({data: data})})
				.catch(error => console.log(error));
}
  componentDidMount() {
    this.fetchData();
  }
  render() {
		var carousels=[];
    var events = [];
    if (this.state.singleEvent === false) {
      if (typeof this.state.eventList !== 'undefined' && this.state.eventList.length > 0) {
        events = this.state.eventList.map((event, index) => {
          return <div> < Cards key = {index} event = {event} moreDetails = {this.moreDetails}/> </div>
        });
      }
    } else {
      if (typeof this.state.data.data !== 'undefined' && this.state.data.data.length > 0) {
        let eventS = this.state.data.data.filter(obj => {
          return obj.id === this.state.eventId;
        });
        console.log(eventS);
        events = < Event data = {eventS[0]}/>
      }
    }
		if (typeof this.state.data.data !== 'undefined' && this.state.data.data.length > 0 ){
			carousels= this.state.data.data.slice(0,3)
		}
    return ( <div className = "body" >
      <Header / >
      <Input id = "event"
      placeholder = "please type texts"
      type = "text" / >
      <Search className = "searchBttn" label = "Search"
      handleClick = {() => this.nextResults()}/> <div>
      <div className = "flex-container" > {events} </div> {
        this.state.isloaded ? ( <Row className = "justify-content-center" >
            <Search className = "bbtn" label = "Back" handleClick = {() => this.prevResults()}/>
						<Search label = "Next" className = "bbtn" handleClick = {() => this.nextResults()}/>
						</Row>): <div className="carousel">
							<ControlledCarousel carouselItems={carousels} />
						</div>}

					</div>
				</div>
      )
    }
  }
  export default Display;
