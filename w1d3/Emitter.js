function Emitter(){
    this.Events={};
}
Emitter.prototype.on= function(type,listener){
    this.Events[type]=this.Events[type] ||[];
    this.Events[type].push(listener);

}
Emitter.prototype.emit= function(type){
    if (this.Events[type]){
    this.Events[type].forEach(function(listener) {
        listener();
        
    });
    }
}
module.exports=Emitter;