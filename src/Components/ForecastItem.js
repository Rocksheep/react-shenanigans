import React, { Component } from 'react';
import ForecastItemRow from './ForecastItemRow';

class ForecastItem extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const forecastItemRows = this.props.forecast.map((forecast, index) => <ForecastItemRow key={index} forecast={forecast}></ForecastItemRow>);
        return (
            <div className="forecast">
                <div className={'forecast-header forecast-header--'+this.props.forecast[0].className()}>
                    <div>
                        <h3>{this.props.forecast[0].humanReadableDate()}</h3>
                        <h1>{Math.round(this.props.forecast[0].currentTemp)}&deg;</h1>
                    </div>
                </div>
                <div className="forecast-body">
                    {forecastItemRows}
                </div>
            </div>
        );
    }
}

export default ForecastItem;