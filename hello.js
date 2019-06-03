var express = require('express');
var app = express();
var port = process.env.PORT || 3000;//variable de ambiente escucha en un puerto/*

var response ={
    error: false,
    code: 200,
    message: 'ok'
}

app.get('/', function(req,res){
    //res.send('<html><head></head><body><h1>Hello World!</h1></body></html>')
    res.json(response);
});

//pedir un usuario
app.get('/user/:user', function(req,res){
    if(req.params.user>50){
        
        response.error=false;
        response.message='okay';
        response.code=200;

        res.json(response);

    }
    else{
        response.error=true;
        response.message='not okay';
        response.code=404;
    
    }
});

app.listen(port);
