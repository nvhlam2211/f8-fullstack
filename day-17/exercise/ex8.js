var s = function(n){
    if ( n % 1 ===0){
        if ( n === 1 && n > 0){
            return 1;
        }
        return 1/n + s(n-1);
    }
}
console.log(s(5));