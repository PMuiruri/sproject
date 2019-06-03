import React from 'react';
import{Switch, Route} from 'react-router-dom';
import Header from "./components/js/header.js";
import Display from  "./components/js/display.js";
import './App.css';




function App() {

  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Header} />
      <Route path="/display" component={Display} />
    </Switch>



    </div>
  );
}

export default App;
