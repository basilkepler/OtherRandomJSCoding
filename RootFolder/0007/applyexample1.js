//define object
var cityObject = {weather: 'rainy'};

//define function
function weather(city) {
return city + ' has ' + this.weather + ' weather' } 

console.log(weather.apply(cityObject,["portland"]))