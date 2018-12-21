const yargs= require('yargs');

const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather.js');

const argv=yargs
.options({
   a:{
     demand:true,
     alias:'address',
     string: true
   }
 })
 .help()
 .argv;


address=argv.a;
var lat;
var lng;
geocode.geocodeAddress(address,(errorMessage, results)=>{
  if (errorMessage){
    console.log(errorMessage);
  }else {
    weather.getWeather(results.latitude,results.longitude,(errorMessage, wresults)=>{
      if (errorMessage){
        console.log(errorMessage);
      }else {
        console.log("The Weather at "+results.address+" is "+wresults.summary+". The tempearture is "+wresults.temperature+"F, but it feels like "+wresults.apparent+"F.");
      }

    });

  }

});
