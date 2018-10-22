import React, { Component } from 'react';
import OpenWeatherMapResource from '../Weather/WeatherResources/OpenWeatherMapResource';
import ForecastItem from './ForecastItem';

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
            <h1>What is up</h1>
            <div>
                {forecastElements}
            </div>
            <div className="ghost-box">
                <div className="ghost">
                    <div className="mouth"></div>
                </div>
                <div className="ghost-bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    }

    componentDidMount() {
        this.resource.findForecastForCity('Rotterdam');
    }
}

export default WeatherPage;