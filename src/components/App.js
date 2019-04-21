import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";

import "./App.css";

import CharacterCards from "./CharacterCards";
import AllFilms from "./Films/AllFilms";
import Film from "./Films/Film";
import FilmSchema from "./Films/FilmSchema";
import Characters from "./People/Characters";


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
            <Route path="/films/schema" component={FilmSchema} />
            <Route path="/films/:id" component={Film} />
          </Switch>
          <Switch>
            <Route path="/people" component={Characters} />
            <Route path="/people/:id" component={CharacterCards} />
            <Route path="/people/schema" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/planets" component={CharacterCards} />
            <Route path="/planets/:id" component={CharacterCards} />
            <Route path="/planets/schema" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/species" component={CharacterCards} />
            <Route path="/species/:id" component={CharacterCards} />
            <Route path="/species/schema" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/starships" component={CharacterCards} />
            <Route path="/starships/:id" component={CharacterCards} />
            <Route path="/starships/schema" component={CharacterCards} />
          </Switch>
          <Switch>
            <Route path="/starships" component={CharacterCards} />
            <Route path="/starships/:id" component={CharacterCards} />
            <Route path="/starships/schema" component={CharacterCards} />
          </Switch>
          <Switch>
            <Router path="/vehicles" component={CharacterCards} />
            <Router path="/vehicles/:id" component={CharacterCards} />
            <Router path="/vehicles/schema" component={CharacterCards} />
          </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
