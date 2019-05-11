var request = require("request");
    var options = { method: 'GET',
    url: 'https://api.openuv.io/api/v1/uv',
    qs: { lat: '19.166667', lng: '-104', dt: '2018-01-24T10:50:52.283Z' },
    headers:
     { 'content-type': 'application/json',
       'x-access-token': '8e9b86548b5a3ff5a679999207a615dd' } };
   
   request(options, function (error, response, body) {
     if (error) throw new Error(error);
    let info = JSON.parse(body);
     console.log("UV: " +info.result.uv_max);
   });
   