var n = 5;
var count = 1;
var triangle = " ";
for ( var i = 0; i < n; i++){
    for (var j =0 ; j < i ;j++){
        triangle += `${count}`;
        count ++;
    }
    triangle += `\n`;
}
console.log(triangle);