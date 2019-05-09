/*var request = require('request');

request('https://api.darksky.net/forecast/79fdff634fd93d4dd314dd948b197ef4/19.2433,-103.725', function (error, response,body) {
  console.log(); // Print the error if one occurred
  let text = JSON.parse(body);
  var celsiusToFahrenheit = require('celsius-to-fahrenheit');
    text = celsiusToFahrenheit(text.currently.temperature);
  console.log('Temperatura:', text);
 
 
});*/

//promise
var rp = require('request-promise');
rp('https://api.darksky.net/forecast/79fdff634fd93d4dd314dd948b197ef4/19.2433,-103.725')
    .then( function(data){
      let text = JSON.parse(data);
      var celsiusToFahrenheit = require('celsius-to-fahrenheit');
      text = celsiusToFahrenheit(text.currently.temperature);
      console.log('Temperatura:', text);
      
    })
    .catch(function (err) {
        console.log("error");
    });
  
rp('https://us1.locationiq.com/v1/search.php?key=dc2c7f9eb7e08f&q=Colima&format=json')
    .then( function(data){
      let info = JSON.parse(data);
      let lat =info[0]['lat'];
      let lon = info[0]['lon'];
      console.log('Latitud: ', lat, '\nLongitud: '+ lon);
      
    })
    .catch(function (err) {
        console.log("error");
    });

    var options = { 
    method: 'GET',
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: '19.66667', lng: '-104', dt: '2018-01-24T10:50:52.283Z' },
    headers: 
     { 'content-type': 'application/json',
       'x-access-token': '8e9b86548b5a3ff5a679999207a615dd' } 
      };

  rp(options)
    .then(function(body){
      let info = JSON.parse(body);
      console.log("UV: " +info.result.uv_max);
    })
    .catch(function(err){
      console.log("error");
    });