import React, { Component } from "react";
import "../style/input.css";
import { Form } from "react-bootstrap";
class Input extends Component {
  render() {
    return (
      <div className="input">
        <Form>
          <Form.Control
            size="lg"
            type={this.props.type}
            placeholder={this.props.placeholder}
            id={this.props.id}
          />
        </Form>
      </div>
    );
  }
}

export default Input;
