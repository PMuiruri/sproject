import React from "react";
import "../style/carousel.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from 'react-bootstrap/Carousel';
import Button from "react-bootstrap/Button";



class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;
    return (
      <Container>
        <Row className="justify-content-between align-items-center vh-60">
          <div className="col-md-5">
            <h1 className="text-white">Events Happening Around you!</h1>
            <p className="text-white">We fetch the web to find you events that are happening around you - particularly in Helsinki, Vantaa and Espoo.</p>
            <Button className="btn-sm btn-round" value="food" onClick={this.props.handleAll}><i className="fas fa-align-left links-icon"></i> View Featured Events</Button>
          </div>
          <div className="col-md-6">
            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} >
              {this.props.type}
              {this.props.carouselItems.map((event , index)=>{
                return(
                  <Carousel.Item key={index}>
                    {event.description.images.length >0 ?
                      (  <img className="d-block w-100" src={event.description.images[0].url}  alt='events around' /> )
                      : <img className="d-block w-100" src="images/altImage1.jpg" alt='events happening' />}
                      <Carousel.Caption>
                        <h2>{event.name.fi}</h2>
                        {this.props.type === "event"?
                          <h3>{(event.event_dates.starting_day).split("T")[0]} </h3>:  <h3>{event.opening_hours.hours.opens}</h3>}
                      </Carousel.Caption>
                  </Carousel.Item>
                  )
                }) }
            </Carousel>
          </div>
        </Row>
      </Container>

      // container

    );
  }
}



export default ControlledCarousel;
