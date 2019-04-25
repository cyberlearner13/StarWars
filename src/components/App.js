import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import "./App.css";

import CharacterCards from "./CharacterCards";
import AllFilms from "./Films/AllFilms";
import Film from "./Films/Film";
import Characters from "./People/Characters";
import Planets from "./Planets/Planets";
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
            <Route path="/films/:id" component={Film} />
          </Switch>
          <Switch>
            <Route path="/people" component={Characters} />
            <Route path="/people/:id" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/planets" component={Planets} />
            <Route path="/planets/:id" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/species" component={Species} />
            <Route path="/species/:id" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/starships" component={Starships} />
            <Route path="/starships/:id" component={CharacterCards} />
          </Switch>
          <Switch>
            <Router path="/vehicles" component={Vehicles} />
            <Router path="/vehicles/:id" component={CharacterCards} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
