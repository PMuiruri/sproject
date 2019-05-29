import React , {Component} from "react";

class Image extends Component{
render(){
return (

	<div className="body">
		<img src={this.props.imageURL} alt="event_image" style={{width:'122px', height:'122px'}}/>
	</div>

)}
}
export default Image;
