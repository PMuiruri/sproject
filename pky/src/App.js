import React from "react";
import { Switch, Route } from "react-router-dom";
import Display from "./components/js/display.js";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import AboutUs from "./components/js/AboutUs";
import ContactUs from "./components/js/ContactUs";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Display} />
        <Route path="/display" component={Display} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/ContactUs" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
