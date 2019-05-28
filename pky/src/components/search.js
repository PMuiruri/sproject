import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    };

    componentDidMount() {
      fetch("http://localhost:3030/")
        .then(response => response.json())
        .then(data =>{
console.log(data);
          this.setState({ data: data});
        })
.catch(error=> console.log(error));

    }




render(){
return( <div className="button"> <button id="click">Search</button>
 </div>

);





}


}





























export default Search;
