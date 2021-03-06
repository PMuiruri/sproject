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
            className="btn btn-round"
            variant="primary"
            size="lg"
            onClick={this.props.handleClick}
            value={this.props.id}
            disabled={this.props.handleChange}
          ><i className={this.props.icon}></i>
            {this.props.label}
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Search;
