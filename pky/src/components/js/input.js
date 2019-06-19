import React, { Component } from "react";
import "../style/input.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className="container">
      <Row>
        <Col md={6} className="float-left">
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Control as="select" onChange={this.props.handleLocationChange} className="event-selector dropdown-content">
              <option value="" className="dropdown-content"> Search by Location</option>
                return (
                  <option value="Helsinki" className="dropdown-content"> Helsinki </option>
                  <option value="Espoo" className="dropdown-content"> Espoo </option>
                  <option value="Vantaa" className="dropdown-content"> Vantaa </option>
                );
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={6} className="float-right">
          <Form.Group controlId="exampleForm.ControlSelect1" >
            <Form.Control as="select" onChange={this.props.handleChange} className="event-selector">
              <option value="" className="dropdown-content">Select an Event</option>
              {this.props.options.map((opt, index) => {
                return <option key={index} value={opt} className="dropdown-content"> {opt} </option>;
              })}
              ;
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      </div>


      
    );
  }
}

export default Input;
