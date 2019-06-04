import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar"
import  "../style/links.css";


class Links extends Component{
  render(){
    return(
<div >
<ButtonToolbar className= "body-links">
  <Button variant="outline-primary">Sports</Button>
  <Button variant="outline-secondary">Festivals</Button>
  <Button variant="outline-success">Dance</Button>
  <Button variant="outline-warning">Music</Button>
  <Button variant="outline-danger">Food</Button>
  

</ButtonToolbar>


</div>



    )
  }
}

export default Links;
