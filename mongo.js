var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect
('mongodb://root:root123@ds147125.mlab.com:47125/addressbookgac', {useNewUrlParser: true}

);

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
    firstname: 'Alejandra',
    lastname: 'Pérez',
    address: '555 Main St.'
});

//save the user
john.save(function(err){
    if(err)throw err;

    console.log('person saved!');
});
//get all users
Person.find({}, function(err,users){
    if(err)throw err;
//object of all the users
    console.log(users);
});