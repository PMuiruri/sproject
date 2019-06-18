import React, { Component } from "react";
import Search from "./search.js";
import Input from "./input.js";
import Header from "./header.js";
import Cards from "./cards.js";
import ControlledCarousel from "./carousel.js";
import Row from "react-bootstrap/Row";
//import Col from 'react-bootstrap/Col';
import Event from "./event.js";
import Links from "./links.js";
import FooterPagePro from "./Footer.js";
import "../style/search.css";
import "../style/display.css";
import "../style/carousel.css";
import "../style/carousel.css";

class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      tags: [],
      searchIndex: 0,
      eventList: [],
      isloaded: false,
      singleEvent: false,
      eventId: 0,
      resultCount: 12,
      eventIndex: 0,
      isprevdisabled: false,
      isnextdisabled: false
    };
  }
  //function to render the next set of results
  nextResults() {
    if (this.state.searchIndex >= 100 - this.state.resultCount) {
      this.setState({
        isnextdisabled: true,
        searchIndex: 100 - this.state.resultCount
      });
      console.log("no more items");
    } else {
      this.setState({
        searchIndex: this.state.searchIndex + this.state.resultCount,
        isloaded: true,
        isprevdisabled: false
      });
      this.renderData();
    }
  }
  //function to navigate back to previous set of data
  prevResults() {
    this.setState({
      searchIndex: this.state.searchIndex - this.state.resultCount,
      isnextdisabled: false
    });
    if (this.state.searchIndex <= 0) {
      this.setState({ isprevdisabled: true, searchIndex: 0 });
      console.log("no more items");
    } else {
      this.renderData();
    }
  }
  //function to view more details about a single event
  moreDetails = id => {
    this.setState({
      singleEvent: true,
      eventId: id,
      isloaded: false
    });
  };

  //function to limit the amount of data to render
  renderData() {
    let data = this.state.data.data.slice(
      this.state.searchIndex,
      this.state.searchIndex + this.state.resultCount
    );
    this.setState({
      eventList: data,
      singleEvent: false
    });
  }
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  // function to fecth based on a location
  fetchLocation = e => {
    var lat;
    var long;
    let location = e.target.value;
    console.log("react " + e.target.value);
    if (location === "Espoo") {
      lat = "60.205490";
      long = "24.655899";
    } else if (location === "Helsinki") {
      lat = "60.192059";
      long = "24.945831";
    } else if (location === "Vantaa") {
      lat = "60.294411";
      long = "25.040070";
    }
    console.log("react " + lat, long);
    fetch(`/location?lat=${lat}&long=${long}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        this.renderData();
      })
      .catch(error => console.log(error));
  };
  // function to fecth based on a tag name
  fetchTag = e => {
    let tag = e.target.value;
    console.log("react " + e.target.value);
    fetch(`http://localhost:3030/tags?tag=${tag}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ data: data, isloaded:true });
      this.renderData();
    })
    .catch(error => console.log(error));
  };
  // function to fetch all events
  fetchAllEvents = () => {
    fetch("/events")
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data, tags: Object.values(data.tags) });
      })
      .catch(error => console.log(error));
  };
  //function to load data at the beginning of the app
  componentDidMount() {
    this.fetchAllEvents();
  }

  render() {
    var carousels = [];
    var events = [];
    var tagArray = [];
    if (this.state.singleEvent === false) {
      if (
        typeof this.state.eventList !== "undefined" &&
        this.state.eventList.length > 0
      ) {
        events = this.state.eventList.map((event, index) => {
          return (
            <div key={index}>
              <Cards event={event} moreDetails={this.moreDetails} />
            </div>
          );
        });
      }
    } else {
      if (
        typeof this.state.data.data !== "undefined" &&
        this.state.data.data.length > 0
      ) {
        events = (
          <Event dataSet={this.state.data.data} id={this.state.eventId} />
        );
      }
    }
    if (
      typeof this.state.data.data !== "undefined" &&
      this.state.data.data.length > 0
    ) {
      carousels = this.state.data.data.slice(0, 3);
    }
    if (typeof this.state.tags !== "undefined" && this.state.tags.length > 0) {
      tagArray = this.state.tags;
      return (
        <div className="wrapper">
        <Header />
        <Input id="event" placeholder="Search Events" options={tagArray} handleChange={this.fetchTag} handleLocationChange={this.fetchLocation}/>
        <Links handleClick={this.fetchTag} handleAll={() => this.nextResults()} />
        <div className="mt-4">
          <div className="flex-container"> {events} </div>
          {this.state.isloaded ? (
            <Row className="justify-content-center">
            <Search icon="fa fa-arrow-left" handleClick={() => this.prevResults()}  handleChange={this.state.isprevdisabled}/>
            <Search  icon="fa fa-arrow-right" handleClick={() => this.nextResults()} handleChange={this.state.isnextdisabled}/>
            </Row>
          ) : (
            <div className="carousel">
            <ControlledCarousel carouselItems={carousels} />
            </div>
          )}
        </div>
        <FooterPagePro />
        </div>
      );
    }
    return <div />;
  }
}
export default Display;
