var obj={
    name: 'Johnny',
    greet: function(param){
        console.log(`Hello ${ this.name}`);
    }
}

obj.greet();
obj.greet.call({name:'Johnny Bravo'});//pasa un parametro extra a la llamda de la funcion 
obj.greet.apply({name:'Jane Bravo'});//se modifica la palabra a la que this. apunta 
