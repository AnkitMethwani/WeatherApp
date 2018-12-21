const request= require('request');

var getWeather=(latitude,longitude,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/f5dc40ac62aaefc8b231208e50b4e039/${latitude},${longitude}`,
    json:true
  },(error,response,body)=>{
    if (error) {
      callback('Unable to connect to Dark Sky API');
    }
    else if (!error && response.statusCode===200) {
      callback(undefined,{
        temperature:body.currently.temperature,
        apparent:body.currently.apparentTemperature,
        summary:body.currently.summary
      }
        )
    }
    else {
      callback('Unable to fetch Weather.');
    }
  });
}

module.exports.getWeather=getWeather;
