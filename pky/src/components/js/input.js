import React, { Component } from "react";
import "../style/input.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
class Input extends Component {
  render() {
    return (
      <div className="input">
        <DropdownButton
          id="dropdown-basic-button"
          title="Dropdown button"
          size="lg"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Input;
