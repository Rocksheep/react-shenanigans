import React, { Component } from 'react';
import './css/app.scss';
import Homepage from "./Components/Homepage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Homepage></Homepage>
        </header>
      </div>
    );
  }
}

export default App;
