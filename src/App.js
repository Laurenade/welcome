import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/:dataEntered"
          render={(props) => <Welcome {...props} />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact/:dataEntered" component={Contact} />
      </Switch>
    </div>
  );
}

export default App;

//<Route component={Error}></Route>    https://codewithstupid.com/react-router-with-switch-and-link/
