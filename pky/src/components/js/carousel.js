import React from "react";
import Carousel from 'react-bootstrap/Carousel'



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
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}

      >
      {this.props.carouselItems.map((event , index)=>{
        return(   <Carousel.Item key={index}>
          {event.description.images.length >0 ?
            (  <img
                className="d-block w-100"
                src={event.description.images[0].url}
                alt=''
              />)
      : <img  className="d-block w-100" src="images/altImage1.jpg" alt='' />}
            <Carousel.Caption>
              <h2>{event.name.fi}</h2>
              <h3>{(event.event_dates.starting_day).split("T")[0]} </h3>
            </Carousel.Caption>
          </Carousel.Item>)

      }) }

      </Carousel>
    );
  }
}



export default ControlledCarousel;
