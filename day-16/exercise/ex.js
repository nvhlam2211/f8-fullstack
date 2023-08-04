// Bài 1:
var a = 5;
var b = 10;
if (a === b || a !== b){
    console.log(`a = ${b}`);
    console.log(`b = ${a}`);
}

// Bài 2:
var total = 0;
total = 10 + 20 + Math.pow(5,10) /2;
console.log(total);

// Bài 3:

var c = 2;
var d = 4;
var e = 5;
if ( c > d && c > e){
    console.log(`Số lớn nhất là ${c}`);
}
else if (d > c && d > e){
    console.log(`Số lớn nhất là ${d}`);
}
else if (e > c && e > d){
    console.log(`Số lớn nhất là ${e}`);
}
else if (c === d && c > e){
    console.log(`Số lớn nhất là ${c}`);
}
else if (c === e && c > d){
    console.log(`Số lớn nhất là ${c}`);
}
else{
    console.log(`Số lớn nhất là ${e}`);
}

// Bài 4:
var m = 0;
var n = 6;
if (m*n > 0){
    console.log(`${m} và ${n} cùng dấu`);
}
else {
    console.log(`${m} và ${n} khác dấu`);
}

// Bài 5:

var i = 5;
var j = 4;
var k = 3;
if (i > j) {
    i += j;
    j = i - j;
    i -= j;
  }
  if (j > k) {
    j += k;
    k = j - k;
    j -= k;
  }
  if (i > j) {
    i += j;
    j = i - j;
    i -= j;
  }
  console.log("ba số sau khi được sắp xếp tăng dần lần lượt là:",i,j,k);
