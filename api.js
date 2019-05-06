var request = require('request');

request('https://api.darksky.net/forecast/79fdff634fd93d4dd314dd948b197ef4/19.2433,-103.725', function (error, response,body) {
  console.log(); // Print the error if one occurred
  let text = JSON.parse(body);
  var celsiusToFahrenheit = require('celsius-to-fahrenheit');
    text = celsiusToFahrenheit(text.currently.temperature);
  console.log('Temperatura:', text);
 
 
});