console.log("this is js 2")


const mySelf = {
    name:"chama",
    age:27,
    height:6,
    gender:"male",

    changeName: function(name){
        this.name = name;
    },

    changeAge: function(age){
        this.age=age;
    }
}