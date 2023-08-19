// var a = {
//     name: "Hoàng Lâm",
//     email: "hoanglam.web@gmail.com",
//     getName: function () {
//         return this.name;
//     },
// };

// var b = {
//     name: "Nguyễn Lâm",
//     email: "nguyenlam.web@gmail.com",
//     getName: function (){
//         return this.name;
//     },
// };

// Cần phải có 1 bản thiết kế cho object 
// => Functions Constructor (Hàm tạo)

// Hàm thông thường: getEmail, getAge, ...
// Hàm tạo: person, user, ... => Viết theo Pascal Case

// var Person = function () {
//     // khai báo các thuộc tính
//     // console.log(this);
//     this.name = "Hoàng Lâm",
//     this.email = "hoanglam.web@gmail.com",
//     this.getName = function () {
//         return this.name;
//     };
// };
// Person.prototype.getId = function (){
//     return "#" + Math.floor(Math.random() * 1000);
// };
// // tạo đối tượng 
var person = new Person("Hoàng Lâm", "hoanglam.web@gmail.com");
console.log(person);
// console.log(person.getId());
// var user = new Person("Dương", "duong.web@gmail.com");
// user.age = 19;
// console.log(user);
// console.log(user.getId());

var auth = {};
var fullname = "";
var customer = [];
console.log(auth);
console.log(person.constructor.name);
console.log(auth.constructor.name);
console.log(fullname.constructor.name);
console.log(customer.constructor.name);
// lưu ý với null và undefined

Person.isPerson = function (variable){
    return variable && variable.constructor.name === "Person";
};
var a = new Person ();
if (Person.isPerson(a)){
    console.log("Đây là person");
}
else {
    console.log("Đây không phải là person");
}

