let cat = {
    id: 1,
    name: "Whiskers",
    age: 2,
    breed: "Siamese",
    meow: function() {
        console.log("Meow!");
    },
    scratch: function() {
        console.log("Scratch!");
    }
};

let person = {
    id: 2,
    name: "John",
    age: 30,
    occupation: "Web Developer",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },
    work: function() {
        console.log("I am coding!");
    }
};

const objArr = [cat,person];

export default objArr;