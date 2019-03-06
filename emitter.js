function Emitter(){
    this.events ={} ;   
}

Emitter.prototype.on=function(type,listener){
    this.events[type]=this.events[type] || [];//o lo convierte en array
    this.events[type].push(listener);

}

Emitter.prototype.emit =function(type){
    if(this.events[type]){
        this.events[type].forEach(function(listener) {
            listener();
        });
    }
}

module.exports = Emitter;//el módulo 

