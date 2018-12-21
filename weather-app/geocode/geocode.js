const request= require('request');
var geocodeAddress = (address,callback) => {
  encoded_address=encodeURIComponent(address);

  request({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+encoded_address+'&key=AIzaSyDQSzDnrQObVbZxcCgQOcNMc4MygQ3kMbI',
    json:true
  },(error,response,body)=>{
    if (error){
      callback('Unable to connect to google servers');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find the given address');
      console.log();
    } else if (body.status === 'OK') {
      callback(undefined,{
        address:body.results[0].formatted_address,
        latitude:JSON.stringify(body.results[0].geometry.location.lat,undefined,2),
        longitude:JSON.stringify(body.results[0].geometry.location.lng,undefined,2)
      })
    }

  });

};

module.exports.geocodeAddress=geocodeAddress;
