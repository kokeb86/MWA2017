console.log("test one");
setTimeout(function(){console.log("Hello"),1000

});
console.log("World");

//[1,2,3,4,5,6,7,8,9].even(n=>n%2);
const even= [1,2,3,4,5,6,7,8].filter(function(a){
    return a%2;
});
console.log(even);
const odd= [1,2,3,4,5,6,7,8].filter(function(a){
    return a%2==0;
});
console.log(odd);