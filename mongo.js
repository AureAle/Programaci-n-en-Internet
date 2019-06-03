var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect
('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac', {useNewUrlParser: true}

);
var port = process.env.PORT || 3000;//variable de ambiente escucha en un puerto/*

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

//save the user
app.get('/person/:id', function(req,res){
    res.send('<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>');

app.get('/api', (req, res)=>{
        res.json({firstname: 'john', lastname:'Doe'});
    });
app.post('/api', (req, res)=>{

    let person = Person({
        firstname: req.body.firstname,
        lastname:req.body.lastname,
        address:req.body.address
    });


person.save(function(err){
    if(err)throw err;
    console.log('person saved!');
});


});
app.listen(port);

//get all users
//Person.find({}, function(err,users){
   // if(err)throw err;
   // object of all the users
   // console.log(users);
    //});
