//regresa el constructor
function Greetr(){
    this.greeting = 'Hello world';
    this.greet = function(){
        console.log(this.greetin);
    }
}

module.exports = Greetr;