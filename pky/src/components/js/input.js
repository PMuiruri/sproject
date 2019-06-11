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
          <Dropdown.Item value="sports">Sports</Dropdown.Item>
          <Dropdown.Item value="music">Music</Dropdown.Item>
          <Dropdown.Item value="art">Art</Dropdown.Item>
        </DropdownButton>
      </div>
    );
  }
}

export default Input;
