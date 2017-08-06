
const yargs = require('yargs');
const axios = require('axios');

const darkSkyApiKey = `36960ebcb0d6e50300927d86490e5bef`;

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

//axios can automatically parse json data
axios.get(geocodeUrl).then((response)=>{
    if (response.data.status === 'ZERO_RESULTS'){
        //stops code from below from running and sends error message
        throw new Error('Unable to find that address.');
    }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${darkSkyApiKey}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl).then((response)=>{
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.data.currently.apparentTemperature;
        console.log(`It's currently ${temperature}.\nIt feels like ${apparentTemperature}.`);
    })
}).catch((e) =>{
    if (e.code === 'ENOTFOUND'){
        console.log(`unable to connect to API servers.`);
    }else{
        console.log(e.message);
    }
});