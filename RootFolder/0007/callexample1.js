display = function(city){
    return this.city + ' has ' + this.weather +' weather.'
}

weatherData = {
    city: 'Portland',
    weather: 'Rainy'
    }; 

console.log(display.call(weatherData, this.city, this.weather))