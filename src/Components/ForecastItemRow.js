import React from 'react';

let ForecastItemRow = (props) => (
    <div className='forecast-item-row flex flex--row'>
        <span className='flex-1 text--left'>
            {props.forecast.humanReadableTime()}
        </span>
        <img style={{'marginRight': '8px'}} height="25px" src={require('../assets/images/icons/'+props.forecast.icon())} alt="Weather icon"/>
        <span className="text--right">
            {Math.round(props.forecast.currentTemp)}&deg;
        </span>
    </div>
);

export default ForecastItemRow;