const request = require('request');

var geocodeAddress = (address, callback) => {
        request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`,
        json: true
    }, 
    (error, response, body) => {
        //3rd arg shows entire obj with 2 space indentation
        //console.log(JSON.stringify(error,undefined,2));
        if(error){
            callback(`Cannot reach the Google API`);
        }else if (body.status === 'ZERO_RESULTS'){
            callback(`There are no results for this address`);
        }else if(body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });

        }
    });
};

module.exports.geocodeAddress = geocodeAddress;