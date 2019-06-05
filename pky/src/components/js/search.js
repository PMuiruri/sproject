import React, { Component } from 'react';
import "../style/search.css"
import {ButtonToolbar} from "react-bootstrap"
import Button from "react-bootstrap/Button"


class Search extends Component{
render(){
return(
<ButtonToolbar>
<Button className={this.props.className} variant="primary" size="lg"  onClick={this.props.handleClick} >{this.props.label}

    </Button>
    </ButtonToolbar>




);
}
}



export default Search;
