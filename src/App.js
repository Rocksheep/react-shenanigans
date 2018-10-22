import React, { Component } from 'react';
import './css/app.scss';
import WeatherPage from "./Components/WeatherPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WeatherPage></WeatherPage>
        </header>
      </div>
    );
  }
}

export default App;
