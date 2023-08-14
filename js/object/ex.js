t/*
Object = đối tượng => kiểu dữ liệu tham chiếu 

Hàm tạo của object: Object 

cấu tạo của object bao gồm
-Thuộc tính : Đặc điểm, tính chất
-Phương thức : Hành động

2 loại tạo object :
- Object literal
- Function Constructor (Hàm tạo) 
*/
// Khai báo object 
var user = {
    // key: value
    name: "Hoàng Lâm",
    email: "hoanglam.web@gmail.com",
    age: 31,
    getName: function (){
        return "Hoàng Lâm";
    },
    // "shipping-address" : "Hà Nội",
};

// Thêm key cho object
user.country = "Việt Nam";
user["address"] = "Cầu Giấy - Hà Nội";

// sửa giá trị của key trong object
user.name = "Hoàng Lâm F8";

// Xóa key 
delete user.age;

// Truy cập vào key của object
// console.log(user);
// console.log(user.name);
// console.log(user.email);
// console.log(user.getName);
// console.log(user["age"]);
// var customer = new Object();
// console.log(customer);

// lấy tất cả key trong object
// for (var key in user) {
//     // console.log(key);
//     if (typeof user[key] === "function"){
//         console.log(user[key]());
//     }
//     else {
//         console.log(user[key]);
//     }
// }
// console.log("=============");

// Object.keys(user).forEach(function(key){
//     if (typeof user[key] === "function"){
//         console.log(user[key]());
//     }
//     else {
//         console.log(user[key]);
//     }
// });

var users = [{
    id : 1,
    name: "Sơn Đặng",
    email: "sondn@gmail.com",
},
{
    id: 2,
    name : "Hoàng An",
    email: "hoangan.web@gmail.com",
},
{
    id : 3,
    name : "Hoàng Lâm",
    email: "hoanglam@gmail.com",
}
];
console.log(users);
var html = `<table width="100%" border="1">
<tr>
  <th>ID</th>
  <th>Tên</th>
  <th>Email</th>
</tr>
   ${
    users.map (function(user){
        return `
        <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>
        `;
    })
    .join("")}
</table>`;
document.write(html);