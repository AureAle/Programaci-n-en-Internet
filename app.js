//function statement 
/*function greet(){
    console.log('hi');
}*/

//refactor
 let greet=()=>{
    console.log('hi');
}
greet();
//functions are first-class
/*function logGreeting(fn){
    fn();
}
logGreeting(greet);*/
//refactor
let logGreeting=(fn)=>{
    fn();
}
logGreeting(greet);

//function expresion
let greetMe = function(){//funcion anonima
    console.log('Hola Ale');
}
greetMe();

//es first-class
logGreeting(greetMe);

//use a function expression on the fly (directa)
logGreeting(function(){
    console.log('Hello');
});