var firstname = 'Jane';

(function (lastname){

    var firstname = 'John';
    console.log(firstname);
    console.log(lastname);

}('Doe'));//scope IIFE

console.log(firstname);
//investigar manejo de string ES6
//console.log(`The number of JS MVC frameworks is ${2 * (a + b)} and not ${10 * (a + b)}.`);
//string `algo` y no string ${a+c}