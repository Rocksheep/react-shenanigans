class WeatherResource {

    constructor() {
        this.onLoad = null;
    }

    setOnLoad(callback) {
        this.onLoad = callback;
    }

    onForecastsLoaded(forecasts) {
        if(this.onLoad) {
            console.log(forecasts);
            this.onLoad(forecasts);
        }
    }

    findForecastForCity(city) {
        return [];
    }
}

export default WeatherResource;