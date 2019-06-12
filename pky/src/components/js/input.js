import React, { Component } from "react";
import "../style/input.css";
import Form from "react-bootstrap/Form";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  render() {
    return (
      <div className = "input" >
      <Form.Group controlId = "exampleForm.ControlSelect1" >
      <Form.Control as = "select" onChange={this.props.handleChange}>
      <option value=""> Search by Event tags< /option>
      {this.props.options.map((opt, index) => {
        return (
          <option key={index} value={opt}> {opt} < /option>
        );
      })};

      </Form.Control>
      <Form.Control as = "select" onChange={this.props.handleLocationChange}>
      <option value=""> Search by Location< /option>
      return (
          <option value="Helsinki"> Helsinki < /option>
          <option value="Espoo"> Espoo < /option>
          <option value="Vantaa"> Vantaa < /option>
        );
      </Form.Control>
      </Form.Group>
      </div>
    );
  }
}

export default Input;
