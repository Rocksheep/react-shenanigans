class Forecast {

    constructor(minTemp, maxTemp, currentTemp, type, date) {
        this.minTemp = minTemp;
        this.maxTemp = maxTemp;
        this.currentTemp = currentTemp;
        this.type = type;
        this.date = date;
    }

    icon() {
        switch(this.type) {
            case 800:
                return 'clear.svg';
            case 801:
                return 'sunny-cloud.svg';
            case 802:
                return 'sunny-cloudy.svg';
            case 803:
                return 'cloudy.svg';
            case 500:
                return 'rainy.svg';
            default:
                return 'more-thunder.svg';
        }
    }

    className() {
        switch(this.type) {
            case 800:
                return 'clear';
            case 801:
                return 'sunny-cloud';
            case 802:
                return 'sunny-cloudy';
            case 803:
                return 'cloudy';
            case 500:
                return 'rainy';
            default:
                return 'more-thunder';
        }
    }

    humanReadableDate() {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        const days = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        let dateString = days[this.date.getDay()];
        dateString += ', ' + this.date.getDate() + ' ' + months[this.date.getMonth()];
        return dateString; 
    }

    humanReadableTime() {
        return this.padZeros(this.date.getHours()) + ':' + this.padZeros(this.date.getMinutes());
    }

    padZeros(time) {
        if (time <= 9) {
            return '0' + time;
        }
        return time;
    }

}

export default Forecast;