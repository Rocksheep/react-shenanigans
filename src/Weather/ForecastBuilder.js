import Forecast from "./Forecast";

class ForecastBuilder {

    constructor() {
        this.forecast = new Forecast();
    }

    withMinTemp(minTemp) {
        this.minTemp = minTemp;
        return this;
    }

    withMaxTemp(maxTemp) {
        this.maxTemp = maxTemp;
        return this;
    }

    withCurrentTemp(temp) {
        this.currentTemp = temp;
        return this;
    }

    withType(type) {
        this.type = type;
        return this;
    }

    withTimestamp(timestamp) {
        this.date = new Date(timestamp * 1000);
        return this;
    }

    build() {
        return new Forecast(this.minTemp, this.maxTemp, this.currentTemp, this.type, this.date);
    }

}

export default ForecastBuilder;