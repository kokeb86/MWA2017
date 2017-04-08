var animal= {classification:"birds",getClassfication(){
    return this.classification
}}
function Bird(color,feather,wings,tail){
  
    var color;
    var feather;
    var wings;
    var tail;
    this.getBirdDetails = function(){
        return color+ feather + wings+ tail ;
      
    }
}
Bird.prototype=Object.create(animal);
Bird.prototype.Constructor=Bird;
Bird.prototype.fly=true;
Bird.prototype.swim=true;
  
var duck= new Bird("white"," short feather"," long wings "," shor tail");
console.log(duck.Constructor);
console.log(animal.isPrototypeOf(duck));
console.log(duck.getBirdDetails());
console.log(duck.getClassfication());
