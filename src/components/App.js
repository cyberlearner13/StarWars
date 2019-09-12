import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import "./App.css";

import CharacterCards from "./CharacterCards";
import AllFilms from "./Films/AllFilms";
import Characters from "./People/Characters";
import Character from "./People/Character";
import Planets from "./Planets/Planets";
import Planet from "./Planets/Planet";
import Species from "./Species/Species";
import Starships from "./Starships/Starships";
import Vehicles from "./Vehicles/Vehicles";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="The Star Wars API Project" />
        <Router>
          <div>
          <Route path="/" exact component={CharacterCards} />
          <Switch>
            <Route path="/films" exact component={AllFilms} />
          </Switch>
          <Switch>
            <Route path="/people/:name" component={Character} />
            <Route path="/people" component={Characters} />
          </Switch>
          <Switch>
              <Route path="/planets/:name" component={Planet} />
              <Route path="/planets" component={Planets} />
          </Switch>
          <Switch>
              <Route path="/species/:id" component={CharacterCards} />
              <Route path="/species" component={Species} />
          </Switch>
          <Switch>
            <Route path="/starships/:id" component={CharacterCards} />
            <Route path="/starships" component={Starships} />
          </Switch>
          <Switch>
            <Router path="/vehicles/:id" component={CharacterCards} />
            <Router path="/vehicles" component={Vehicles} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
