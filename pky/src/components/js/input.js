import React, { Component } from "react";
import "../style/input.css";
import Form from "react-bootstrap/Form";
class Input extends Component {
  render() {
    return (
      <div className="input">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control as="select" onChange={this.props.handleChange}>
            <option value=""> Search Events</option>
            {this.props.options.map((opt, index) => {
              return (
                <option key={index} value={opt}>
                  {opt}
                </option>
              );
            })}
            ;
          </Form.Control>
        </Form.Group>
      </div>
    );
  }
}

export default Input;
