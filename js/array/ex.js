// bài 1: Lấy tên trong họ và tên 

// var fullname = "Tạ Hoàng An";
// var firstName = fullname.split(' ').slice(-1).join();
// console.log(firstName);

// bài 2: Sắp xếp danh sách khách hàng tăng dần theo tên

// var customers = [
//     "Nguyễn Đại Thế",
//     "Nguyễn Dương",
//     "Tạ Hoàng An",
//     "Vũ Đức Tài",
//     "Đặng Ngọc Sơn",
//     "Trần Công Lực",
// ];
// var getFirstName = function(fullname) {
//     return fullname.split(" ").slice(-1).join();
// };
// customers.sort(function(a,b){
//     //a trước
//     // b sau
//     if (getFirstName(b) > getFirstName(a)){
//         return -1; // hàm sort nếu return về số âm thì sẽ đổi chỗ
//     }
// });
// console.log(customers);

// bài 3: tìm kiếm danh sách khách hàng theo từ khóa, không phân biệt chữ hoa chữ thường

// var customers = [
//         "Nguyễn Đại Thế",
//         "Nguyễn Dương",
//         "Tạ Hoàng An",
//         "Vũ Đức Tài",
//         "Đặng Ngọc Sơn",
//         "Trần Công Lực",
//         "Nguyễn Hoàng Anh",
//     ];
// var keyword = "hoàng";
// var result = customers.filter(function (customer) {
//     return customer.toLowerCase().includes(keyword.toLowerCase());
// });
// console.log(result);