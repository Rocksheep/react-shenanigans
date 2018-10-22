import React, { Component } from 'react';
import OpenWeatherMapResource from '../Weather/WeatherResources/OpenWeatherMapResource';
import ForecastItem from './ForecastItem';
import Clock from './Clock';
import Ghost from './Ghost';

class WeatherPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecasts: []
        }
        this.resource = new OpenWeatherMapResource();
        this.resource.setOnLoad((forecasts) => this.setForecasts(forecasts));
    }

    setForecasts(forecasts) {
        this.setState({forecasts: forecasts});
    }

    render() {
        const forecastElements = Object.keys(this.state.forecasts).map(
            index => <ForecastItem key={index} forecast={this.state.forecasts[index]}></ForecastItem>
        );
        
        return <div>
            <Clock />
            <div>
                {forecastElements}
            </div>
            <Ghost />
        </div>
    }

    componentDidMount() {
        this.resource.findForecastForCity('Rotterdam');
    }
}

export default WeatherPage;