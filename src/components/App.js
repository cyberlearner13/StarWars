import React,{Component} from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

import CharacterCards from './CharacterCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Star Wars API Project</h1>
        </header>
        <div className="App-button">
          <Button type="primary">Get Data</Button>
        </div>
        <CharacterCards />
      </div>
    );
  }
}

export default App;
