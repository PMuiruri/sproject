import React, { Component } from "react";
import "../style/input.css";
import { Dropdown, DropdownButton } from "react-bootstrap";
class Input extends Component {
  render() {
    return (
      <div className="input">
        <DropdownButton
          id="dropdown-basic-button"
          title="Select from here"
          size="lg"
        >
          <Dropdown.Item href="#/action-1">sports</Dropdown.Item>
          <Dropdown.Item href="#/action-2">festivaali</Dropdown.Item>
          <Dropdown.Item href="#/action-4">dance</Dropdown.Item>
          <Dropdown.Item href="#/action-5">music</Dropdown.Item>
          <Dropdown.Item href="#/action-6">food</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Input;
