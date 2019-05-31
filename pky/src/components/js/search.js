import React, { Component } from 'react';
import "../style/search.css"
class Search extends Component{

render(){


return( <div className="searchbttn">

  <button id="click" onClick={this.props.handleClick}  >{this.props.label}</button>

 </div>

);





}


}





























export default Search;
