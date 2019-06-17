import React from "react";
import { Switch, Route } from "react-router-dom";
import Display from "./components/js/display.js";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route path="/display" component={Display} />
      </Switch>
      <Display />
    </div>
  );
}

export default App;
