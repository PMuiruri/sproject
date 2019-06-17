import React, { Component } from "react";
import "../style/search.css";
import { ButtonToolbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
class Search extends Component {
  render() {
    return (
      <div>
        <ButtonToolbar>
          <Button
            className={this.props.className}
            variant="primary"
            size="lg"
            onClick={this.props.handleClick}
            value={this.props.id}
            disabled={this.props.handleChange}
          >
            {this.props.label}
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Search;
