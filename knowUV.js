var request = require('request');

request('https://us1.locationiq.com/v1/search.php?key=dc2c7f9eb7e08f&q=Colima&format=json', function (error, response,body) {
  if (error){
    console.log('Error ={: ',error)
    return;
  }
  console.log(); // Print the error if one occurred
  let info = JSON.parse(body);

 // console.log(info);
 let lat =info[0]['lat'];
 let lon = info[0]['lon'];
  console.log('Latitud: ', lat, '\nLongitud: '+ lon);

  request(`https://api.darksky.net/forecast/79fdff634fd93d4dd314dd948b197ef4/${lat},${lon}`, function (error, response,body) {
  console.log(); 
  let text = JSON.parse(body);
  var celsius = require('fahrenheit-to-celsius');
    text = celsius(text.currently.temperature);
  console.log('Temperatura:', text);
  })

    var options = { method: 'GET',
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: `${lat}`, lng: `${lon}`, dt: '2018-01-24T10:50:52.283Z' },
    headers: 
     { 'content-type': 'application/json',
       'x-access-token': '8e9b86548b5a3ff5a679999207a615dd' } };
   
   request(options, function (error, response, body) {
    if (error) throw new Error(error);
     let info = JSON.parse(body);
     console.log("UV: " +info.result.uv_max);
   })

});
//locationiq
//https://www.openuv.io/uvindex#
//https://developers.google.com/maps/documentation/geocoding/intro
//https://console.cloud.google.com/apis/credentials/key/40d51cf3-49d0-4967-84bf-3e366a8479a2?project=knowuv&folder&organizationId
