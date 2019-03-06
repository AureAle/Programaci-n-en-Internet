//object properties and metods
var obj = {
    greet: 'Hello'
}
console.log(obj.greet);
console.log(obj['greet']);//accediento a la propiedad de un objeto mediante su clave
var prop = 'greet';
console.log(obj[prop]);

//functions and arrays

var arr=[];

arr.push(function(){
    console.log('Jello1');
});
arr.push(function(){
    console.log('Jello2');
});
arr.push(function(){
    console.log('Jello3');
});
arr.forEach(function(item){
  item();
});

//emitter
var Emitter = require('events');//node tiene el evento ya definido 'events'
var eventConfig = require('./config').events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){//mapeo en el event Greet = 'greet' para evitar errores al escribir
    console.log('alguien dijo hola');
});

emtr.on(eventConfig.GREET, function(){
    console.log('a greeting occurred');//se le agrega ese comportamiento al evento al momento
});

console.log('Hello!');
emtr.emit(eventConfig.GREET);

