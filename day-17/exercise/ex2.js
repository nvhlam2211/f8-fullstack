var kwh = 10;
var price = 1;
if (kwh > 0 && kwh <= 50){
    price = kwh * 1678;
}
else if (kwh > 50 && kwh <= 100){
    price = kwh * 1734;
}
else if (kwh > 100 && kwh <= 200){
    price = kwh * 2014;
}
else if (kwh > 200 && kwh <= 300){
    price = kwh * 2536;
}
else if (kwh > 300 && kwh <= 400){
    price = kwh * 2834;
}
else {
    price = kwh * 2927;
}
console.log(`Số tiền phải đóng là : ${price}`);