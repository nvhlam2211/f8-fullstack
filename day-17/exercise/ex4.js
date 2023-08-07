var number = function (n){
    for(var i = 2 ; i <= Math.sqrt(n); i++){
           if ( n % i === 0 ){
            return false;
           }
           return true;
    }
}
var n = 6;
console.log(number(n));
