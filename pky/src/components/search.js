import React, { Component } from 'react';

class Search extends Component{
  constructor(props) {
      super(props);

      this.state = {
        data: [],
      };
    };

    componentDidMount() {
      fetch('http://open-api.myhelsinki.fi/v1/events/', {
            mode: 'cors',
            headers:{
              'Access-Control-Allow_Origin':'*'
            }
          })
        .then(response => response.json())
        .then(data =>{
console.log(data);
          this.setState({ data: data});
        })
.catch(error=> console.log(error));

    }




render(){
return( <div> <button id="click"></button>
 </div>

);



}


}





























export default Search;
