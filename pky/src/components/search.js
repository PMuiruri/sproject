import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data: {data: []},
      };
    };

    fetchData() {
      fetch("http://localhost:3030/")
        .then(response => response.json())
        .then(data =>{
          this.setState({ data });
          console.log(this.state.data.data);
        })
.catch(error=> console.log(error));

    }



render(){
  var events= [];
if (this.state.data.data.length > 0 ){
 events = this.state.data.data.map( (event, index) =>{

      return <div key={index} >
        <li >{JSON.stringify(event.name.fi)}</li>
        <li >{JSON.stringify(event.description.intro)}</li>
        <li >{JSON.stringify(event.location.address.locality)}</li>
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
