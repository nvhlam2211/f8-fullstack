var user = {
    name: "Hoàng An", 
    email: "hoangan.web@gmail.com",
    getName: function(){
        // return user.name;
        console.log(this);
        return this.name;
    },
    jobs: {
        name: "Giảng Viên",
        salary: 5000000,
        histories: [
            {
                year: 2020,
                name: "công việc 1",
            },
            {
                year: 2022,
                name: "Công việc 2",
            },
            {
                year: 2022,
                name: "Công việc 3",
            },
        ],
    },
};
console.log(user.getName());
console.log(user.jobs.name);
console.log(user.jobs.histories[0].name);

// kiểm tra 1 biến xem có phải object không ?

var a = {};
if (typeof a === "object" && !Array.isArray(a) && a !== null){
    console.log("Đây là object");
}
else{
    console.log("Đây không phải là object");
}
// console.log(typeof a);
