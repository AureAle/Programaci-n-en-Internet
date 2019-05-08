var request = require('request');

request('https://maps.googleapis.com/maps/api/geocode/json?address=Avenida+Universidad+333+Las+Viboras+28040+Colima+Col.,+Mexico&key=AIzaSyDf7olC0WJyXyet4iJrlnevFR7up-zynRs', function (error, response,body) {
  if (error){
    console.log('Error ={: ',error)
    return;
  }
  console.log(); // Print the error if one occurred
  let text = JSON.parse(body);

 
  console.log('Latitud: ', text.geometry.lat, '\nLongitud: ');
 
 
});
//locationiq
//https://www.openuv.io/uvindex#
//https://developers.google.com/maps/documentation/geocoding/intro
//https://console.cloud.google.com/apis/credentials/key/40d51cf3-49d0-4967-84bf-3e366a8479a2?project=knowuv&folder&organizationId
