import React, { Component } from 'react';

class Search extends Component{

render(){


return( <div className="button">

  <button id="click" onClick={this.props.handleClick} name={this.props.name} >Search</button>

 </div>

);





}


}





























export default Search;
