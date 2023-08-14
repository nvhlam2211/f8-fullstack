

var a = "10";
var b = 20;

// var c =parseInt(a) + parseInt(b);
var c = +a + +b; 
console.log(c);

/*toán tử ba ngôi
cú pháp : dieukienlogic ? giatridung : giatrisai

*/

var c=9;
var d = c>=10 ? "F8" : "Hoàng Lâm";
console.log(d);
document.write(d>=10 ? "F8" : "");

/*
toán tử nullish
*/
var a;
var b = a ?? "F8";
console.log(b);

var e = 10 ;
var f =  e !== null && a!==undefined ? a : "F8";
console.log(f);

/*
Truthy, falsy
false: 0, "", false, underfined, NaN, null
true: các trường hợp còn lại

Nếu viết: tenbien => Check = true
          !tenbien => Check = false
*/

/*
8. toán tử &&
*/
var a = 0;
var b= a && "F8";
// truthy => hiển thị giá trị sau &&
// falsy => hiển thị giá trị trước &&
console.log(b);

/*
9. toán tử ||
truthy => lấy chính nó
Falsy => lấy sau dấu ||
=> ngược lại so với &&
*/

/*
câu lệnh rẽ nhánh if else
*/

/*
tính lương thực nhận của nhân viên

var total = 15000000

tính lương thực nhận sau khi trừ thuế
-nếu lương < 5tr => thuế = 1%
- nếu lương từ 5tr đến 15tr => thuế = 5%
*/

var income, tax;
var total = 15000000;
if(total < 5000000){
   tax = 1;
}
else if(total >=5000000 && total <=15000000){
    tax = 3;
}
else{
    tax = 5;
}
income = total - (total * tax)/100;
console.log(`lương: ${income}`);

/*
switch case
*/

var action = "insert";

switch (action){
    case "insert":
    case "add":
    case "create":    
        console.log("Thêm");
        break;

    case "update":
    case "edit":
        console.log("Sửa");
        break;  
    
    case "delete":
    case "remove":
    case "destroy":
        console.log("Xóa");
        break; 

        default:
        console.log("Danh sách");
        break;
}


var action="insert";
if(action){
    if (action === "insert" || action === "add" || action === "create"){
        console.log("Thêm");
    }
    else if (action === "update" || action === "edit"){
        console.log("Sửa");
    }
    else if (action === "delete" || action === "remove" || action === "destroy"){
        console.log("Xóa");
    }
    else {
        console.log("Danh Sách");
    }
}

/*
Hiển thị số ngày
*/

var month = 10;
if (month % 1 === 0 && month >= 1 && month <= 12){
    var day;
    month = +month;
    switch (month){
        case "4":
        case "6":
        case "9":
        case "11":
            day = 30;
            break;
        case "2":
            day = 29;
            break;
        default:
            day = 31;
            break;
    }
    console.log(`tháng ${month} có ${day} ngày`);
}
else {
    console.log(`Không có tháng này`);
}

