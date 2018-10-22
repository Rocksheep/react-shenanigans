import WeatherResource from "./WeatherResource";
import ForecastBuilder from "../ForecastBuilder";

class OpenWeatherMapResource extends WeatherResource {

    findForecastForCity(city) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=4908fe39d34da8300958fd8fc11bbe45')
            .then((response) => response.json())
            .then((json) => this.mapForecasts(json));
    }

    mapForecasts(forecastResponse) {
        let forecasts = forecastResponse.list.map((item) => this.createForecastFromResponse(item));
        forecasts = this.groupForecastsByDay(forecasts);
        this.onForecastsLoaded(forecasts);
    }

    groupForecastsByDay(forecasts) {
        let groupedForecasts = {};
        forecasts.forEach(forecast => {
            let date = new Date(forecast.date.getTime());
            date.setHours(0, 0, 0, 0);

            if (groupedForecasts[date.getTime()] === undefined) {
                groupedForecasts[date.getTime()] = [];
            }
            groupedForecasts[date.getTime()].push(forecast);
        });
        return groupedForecasts;
    }

    createForecastFromResponse(item) {
        let builder = new ForecastBuilder();
        return builder.withMinTemp(item.main.temp_min)
            .withMaxTemp(item.main.temp_max)
            .withCurrentTemp(item.main.temp)
            .withType(item.weather[0].id)
            .withTimestamp(item.dt)
            .build();
    }

}

export default OpenWeatherMapResource;