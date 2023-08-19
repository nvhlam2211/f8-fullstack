var user = {
    name: "Hoàng Lâm",
    email: "hoanglam.web@gmail.com",
    getName: function() {
        var current = this;
        console.log(this);
      return  {
        age : 31,
        getInfo: function (){
            console.log(this);
            return `Name: ${current.name} Email: ${current.email}`;
        },
      };  
    },
};
console.log(user.getName().getInfo());



Object.prototype.combine =  function (...args){
            // rest params = tham số còn lại
            var current = this;
            var newArr = args.map(function (key){
                return current[key];
            });
            return newArr;
    };
var users = {
    name: "Hoàng Lâm",
    age: 31,
    email: "hoanglam.web@gmail.com",
};
console.log(customers.combine("name", "age", "email"));

