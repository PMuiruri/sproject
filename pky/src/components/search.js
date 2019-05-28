import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data:{},
      };
    };

    fetchData() {
      fetch("http://localhost:3030/")
        .then(response => response.json())
        .then(data => this.setState((prevState) =>({
					...prevState.data,
					data
				})))
				.catch(error=> console.log(error));

    }
render(){
  var events= [];
if (typeof this.state.data.data !== 'undefined' && this.state.data.data.length > 0 ){
 events = this.state.data.data.map( (event, index) =>{

      return <div key={index} >
        <li >{event.name.fi}</li>
        <li >{event.description.intro}</li>
        <li>{event.location.address.locality}</li>
      </div>


    });

}

return( <div className="button">

  <button id="click" onClick={()=>this.fetchData()}>Search</button>
  <ul>  {events} </ul>
 </div>

);





}


}





























export default Search;
