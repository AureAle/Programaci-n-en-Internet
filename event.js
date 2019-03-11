var EventEmitter = require('events');//node tiene el modulo ya definido 'events'
var util = require('util');

function Greetr(){
    this.greeting = "hello";
}
util.inherits(Greetr,EventEmitter);//util hereda el evento

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet',data);
}
var greeter1 = new Greetr();

greeter1.on('greet', function(data){//en greeter1, greet(10) y haz la funcion 
    console.log('Someone greeted: ' + data);
});
greeter1.greet('Todd');