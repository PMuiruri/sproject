import React , {Component} from "react";
import Search from "./search.js";
import Input from "./input.js";
import Header from "./header.js"

class Display extends Component{
render(){



return (

<div className="body">
<Header />
<Input id="event" type="text" placeholder="Please enter text" />
<Search />




  <div className="boxes">

<div className="box-1">



</div>
<div className="box-2">



</div>
<div className="box-3">



</div>
<div className="box-4">



</div>
</div>
</div>

)

}


}
export default Display;
