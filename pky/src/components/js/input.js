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
          <Dropdown.Item href="#/action-1">SPORTS</Dropdown.Item>
          <Dropdown.Item href="#/action-2">FESTIVAL</Dropdown.Item>
          <Dropdown.Item href="#/action-3">DANCE</Dropdown.Item>
          <Dropdown.Item href="#/action-3">MUSIC</Dropdown.Item>
          <Dropdown.Item href="#/action-3">FOOD</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Input;
