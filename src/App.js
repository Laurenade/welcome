import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Jeopardy from "./components/jeopardy/Jeopardy";
import Navigation from "./components/navigation/Navigation";
import MIA from "./components/mia/MIA";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Lauren" />}
        />
        <Route path="/welcome/:name" component={Welcome} />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/jeopardy" component={Jeopardy} />
        <Route path="/contact/:dataEntered" component={Contact} />
        <Route exact component={MIA} />
      </Switch>
    </div>
  );
}

export default App;

//removed storage//
/*  */
