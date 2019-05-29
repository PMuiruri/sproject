import React, { Component } from 'react';
import "../style/input.css"
class Input extends Component{

render(){
return( <div className="input">
 <input id={this.props.id} placeholder={this.props.placeholder} type={this.props.type}>
 </input>

 </div>

);




}

}





























export default Input;
