'use strict';

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    greet(){
        console.log('hello, ' + this.firstname + ' ' + this.lastname);
    }
}