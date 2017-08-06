
const request = require('request');
const darkSkyApiKey = `36960ebcb0d6e50300927d86490e5bef`;

var getWeather = (lat, lng, callback) => {
    request({
            json: true,
            url: `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lng}`
        }, 
        (error, response, body) => {
            if(!error && response.statusCode === 200){
                callback(undefined, {
                    temperature: body.currently.temperature,
                    apparentTemperature: body.currently.apparentTemperature}
                );
            }else{
                callback(`unable to fetch weather`);
            }
    });
}

module.exports.getWeather = getWeather;